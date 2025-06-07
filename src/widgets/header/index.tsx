import { ModeToggle } from '@/components/mode-toggle';
import BurgerMenu from '@features/BurgerMenu';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-b border-gray-200 py-5">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 pt-5">
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
              <span>☎</span>
              <span>тел (администраторы)</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>@</span>
              <span>почта</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>ссылки на соц. сети</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>⌖</span>
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
              <a
                href="/recreationOrganizedGroups"
                className="transition-colors duration-200">
                Отдых для организованных групп детей и молодежи
              </a>
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
