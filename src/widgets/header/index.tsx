import { ModeToggle } from '@/shared/components/mode-toggle';
import BurgerMenu from '@features/BurgerMenu';
import { Mail, MapIcon, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 mx-auto bg-primary-foreground px-4 py-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto py-2">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            {location.pathname !== '/' ? (
              <Link to="/">
                <img
                  src="./tempLogo.png"
                  alt="logo"
                  className="w-50"
                />
              </Link>
            ) : (
              <img
                src="./tempLogo.png"
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
          <BurgerMenu />
        </div>

        <nav className="top-0 hidden justify-end pt-4 pb-4 xl:flex">
          <ul className="flex flex-wrap items-center space-x-3 text-sm font-medium tracking-wide uppercase">
            <li>
              <Link
                to="/about"
                className="transition-colors duration-200">
                О ЦЕНТРЕ
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                to="/holidaycamp"
                className="transition-colors duration-20">
                Детский отдых
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                to="/recreationOrganizedGroups"
                className="transition-colors duration-200">
                Отдых для организованных групп детей и молодежи
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                to="/projects"
                className="transition-colors duration-200">
                Дополнительные проекты
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                to="/contacts"
                className="transition-colors duration-200">
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
