import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/components/mode-toggle';

const NAV_LINKS = [
  { to: '/about', label: 'О центре' },
  { to: '/holidaycamp', label: 'Детский отдых' },
  {
    to: '/recreationOrganizedGroups',
    label: 'Отдых для организованных групп детей и молодежи',
  },
  { to: '/projects', label: 'Дополнительные проекты' },
  { to: '/contacts', label: 'Контакты' },
];

const CONTACTS = [
  { icon: '☎', text: 'тел (администраторы)' },
  { icon: '@', text: 'почта' },
  { icon: '🌐', text: 'ссылки на соц. сети' },
  { icon: '⌖', text: 'Челябинская обл., Сосновский р-н, д. Ключевка' },
];

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        aria-label="Открыть меню"
        onClick={toggle}
        className="flex flex-col justify-center gap-1.5 p-2 xl:hidden">
        <span className="block h-0.5 w-6 bg-primary transition-transform" />
        <span className="block h-0.5 w-6 bg-primary transition-transform" />
        <span className="block h-0.5 w-6 bg-primary transition-transform" />
      </button>

      {/* полноэкранный оверлей */}
      <div
        className={`fixed inset-0 z-50 flex flex-col overflow-y-hidden bg-white/80 backdrop-blur-sm transition-opacity duration-300 ease-out dark:bg-background/60 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={close} /* клик по фону закрывает меню */
      >
        {/* крестик */}
        <button
          onClick={close}
          aria-label="Закрыть меню"
          className="absolute top-5 right-5 text-4xl leading-none">
          &times;
        </button>

        {/* навигация */}
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-8 text-lg font-medium uppercase"
          onClick={e => e.stopPropagation()} /* внутри – не закрываем по фону */
        >
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={close}
              className="transition-colors hover:text-primary">
              {label}
            </Link>
          ))}
        </nav>

        {/* контакты + переключатель темы */}
        <div
          className="flex flex-col items-center gap-2 pb-8 text-sm"
          onClick={e => e.stopPropagation()}>
          {CONTACTS.map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 text-center">
              <span>{icon}</span>
              <span className="max-w-[260px]">{text}</span>
            </div>
          ))}
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
