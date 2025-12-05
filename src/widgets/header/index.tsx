import { ModeToggle } from '@/shared/ui/components/mode-toggle';
import BurgerMenu from '@features/BurgerMenu';
import { Mail, MapIcon, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 mx-auto bg-primary-foreground px-4 py-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            {location.pathname !== '/' ? (
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img
                  src="/logo2.png"
                  alt="logo"
                  className="w-50"
                />
              </Link>
            ) : (
              <img
                src="./logo2.png"
                alt="logo"
                className="w-50"
              />
            )}
          </div>
          <div className="hidden items-center space-x-6 text-sm xl:flex">
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
              <span>zastavchik@mail.ru</span>
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
                href="https://t.me/lesnayzastava"
                target="_blank"
                className="block">
                <img
                  width={25}
                  alt="Лесная застава ВК"
                  src="/telegram.png"></img>
              </a>
            </div>
            <a
              href="https://yandex.ru/maps/-/CHcLVYnh"
              target="_blank"
              className="flex items-center space-x-1 hover:underline">
              <span>
                <MapIcon size="15px" color='#00ce6e'/>
              </span>
              <span className="max-w-[180px]">
                Челябинская область, Сосновский район, д. Ключевка
              </span>
            </a>
            <ModeToggle />
          </div>
          <BurgerMenu />
        </div>

        <nav className="top-0 hidden justify-end py-2 xl:flex">
          <ul className="flex flex-wrap items-center space-x-3 text-sm font-medium tracking-wide uppercase">
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/about"
                className={`transition-colors duration-200 hover:underline ${location.pathname.includes('/about') ? 'text-primary underline' : 'no-underline'}`}>
                О ЦЕНТРЕ
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/projects"
                className={`transition-colors duration-200 hover:underline ${location.pathname.includes('/projects') ? 'text-primary underline' : 'no-underline'}`}>
                Проекты и услуги
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/recreationOrganizedGroups"
                className={`transition-colors duration-200 hover:underline ${location.pathname.includes('/recreationOrganizedGroups') ? 'text-primary underline' : 'no-underline'}`}>
                Отдых для организованных групп детей
              </Link>
            </li>

            <li className="text-gray-400">|</li>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/holidaycamp"
                className={`transition-colors duration-200 hover:underline ${location.pathname.includes('/holidaycamp') ? 'text-primary underline' : 'no-underline'}`}>
                Детский отдых
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/contacts"
                className={`transition-colors duration-200 hover:underline ${location.pathname.includes('/contacts') ? 'text-primary underline' : 'no-underline'}`}>
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
