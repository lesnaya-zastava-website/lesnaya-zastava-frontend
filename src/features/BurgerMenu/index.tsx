import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModeToggle } from '@/shared/components/mode-toggle';
import { Mail, MapIcon, PhoneCall } from 'lucide-react';

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
        className="flex cursor-pointer flex-col justify-center gap-1.5 xl:hidden">
        <div
          onClick={toggle}
          className="z-60 flex flex-col gap-2">
          <span
            className="z-60 block h-0.5 w-6 origin-top-left bg-primary transition-transform duration-300 ease-in-out"
            style={{
              transform: open ? 'rotate(45deg) translate(5.5px, -2px)' : 'none',
            }}
          />
          <span
            className={`z-60 block h-0.5 w-6 bg-primary transition-opacity duration-300 ease-in-out ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className="z-60 block h-0.5 w-6 origin-bottom-left bg-primary transition-transform duration-300 ease-in-out"
            style={{
              transform: open ? ' rotate(-45deg) translate(5px, 3px)' : 'none',
            }}
          />
        </div>
      </button>

      {/* полноэкранный оверлей */}
      <div
        className={`fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white/80 p-4 backdrop-blur-sm transition-opacity duration-300 ease-out dark:bg-background/60 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={close} /* клик по фону закрывает меню */
      >
        {/* навигация */}
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-8 text-center text-lg font-medium uppercase"
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
          className="flex flex-col items-center gap-2 pb-8 text-center text-sm"
          onClick={e => e.stopPropagation()}>
          <div className="flex items-center space-x-1">
            <span>
              <PhoneCall
                size="15px"
                color="#093"
              />
            </span>
            <span>+7(351)269-49-16</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <Mail
                size="15px"
                color="#093"
              />
            </span>
            <span>ok-zastawa@yandex.ru</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>ссылки на соц. сети:</span>
            <a
              href="https://vk.com/leszastava"
              target="_blank"
              className="block">
              <img
                width={25}
                alt="Лесная застава ВК"
                src="/vk.png"></img>
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <span>
              <MapIcon
                size="15px"
                color="#093"
              />
            </span>
            <span className="max-w-[240px]">
              Челябинская область, Сосновский район, д. Ключевка
            </span>
          </div>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
