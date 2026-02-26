import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@/shared/ui/switch/switch';
import { useTheme } from '@/shared/ui/components/theme-provider';
import { Mail, MapIcon, Moon, PhoneCall, Sun } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/about', label: 'О центре' },
  { to: '/projects', label: 'Проекты и услуги' },
  {
    to: '/recreationOrganizedGroups',
    label: 'Отдых для организованных групп детей',
  },
  { to: '/holidaycamp', label: 'Детский отдых' },
  { to: '/contacts', label: 'Контакты' },
];

const BurgerMenu: React.FC = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  // Определяем, включена ли темная тема (учитывая system)
  useEffect(() => {
    const updateIsDark = () => {
      if (theme === 'dark') {
        setIsDark(true);
      } else if (theme === 'light') {
        setIsDark(false);
      } else {
        // theme === 'system'
        setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    };

    updateIsDark();

    // Отслеживаем изменения системной темы, если выбрана 'system'
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => updateIsDark();
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

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
          className="z-70 flex flex-col gap-2">
          <span
            className="z-70 block h-0.5 w-6 origin-top-left bg-primary transition-transform duration-300 ease-in-out"
            style={{
              transform: open ? 'rotate(45deg) translate(5.5px, -2px)' : 'none',
            }}
          />
          <span
            className={`z-70 block h-0.5 w-6 bg-primary transition-opacity duration-300 ease-in-out ${open ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className="z-70 block h-0.5 w-6 origin-bottom-left bg-primary transition-transform duration-300 ease-in-out"
            style={{
              transform: open ? ' rotate(-45deg) translate(5px, 3px)' : 'none',
            }}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-60 flex flex-col overflow-y-auto bg-background/80 p-4 backdrop-blur-sm transition-opacity duration-300 ease-out dark:bg-background/60 ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={close}>
        <nav
          className="flex flex-1 flex-col items-center justify-center gap-8 text-center text-lg font-medium uppercase mb-8"
          onClick={e => e.stopPropagation()}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => {
                close();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`transition-colors hover:text-primary ${location.pathname.includes(to) ? 'text-primary underline' : 'no-underline'}`}>
              {label}
            </Link>
          ))}
        </nav>

        <div
          className="flex flex-col items-center gap-2 text-center text-sm"
          onClick={e => e.stopPropagation()}>
          <div className="flex items-center space-x-1">
            <span>
              <PhoneCall
                size="15px"
                color="#00ce6e"
              />
            </span>
            <span>+7(351)269-49-16</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <Mail
                size="15px"
                color="#00ce6e"
              />
            </span>
            <span>lesnayazastava@bk.ru</span>
          </div>
          <div className="flex items-center gap-1 space-x-1">
            <span>ссылки на соц. сети:</span>
            <a
              href="https://vk.com/lesnaya_zastava74"
              target="_blank"
              className="block">
              <img
                width={25}
                alt="Лесная застава ВК"
                src="/vk.png"></img>
            </a>
            <a
              href="https://vk.com/leszastava"
              target="_blank"
              className="block">
              <img
                width={25}
                alt="Лесная застава ВК"
                src="/vk.png"></img>
            </a>
            <a
              href="https://max.ru/join/bsb3iWwuMsjaA8gHhfGqf9cIMQt2SGhEWYoMBe_2QjM"
              target="_blank"
              className="block">
              <img
                width={25}
                alt="Лесная застава MAX"
                src="/max.png"></img>
            </a>
          </div>
          <a
            href="https://yandex.ru/maps/-/CHcLVYnh"
            target="_blank"
            className="flex items-center space-x-1 hover:underline">
            <span>
              <MapIcon
                size="15px"
                color="#00ce6e"
              />
            </span>
            <span className="max-w-[240px]">
              Челябинская область, Сосновский район, д. Ключевка, "Лесная застава"
            </span>
          </a>
          <div className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            <Switch
              checked={isDark}
              onCheckedChange={handleThemeToggle}
            />
            <Moon className="h-4 w-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
