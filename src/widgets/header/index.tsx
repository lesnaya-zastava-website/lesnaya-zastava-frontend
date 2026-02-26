import { ModeToggle } from '@/shared/ui/components/mode-toggle';
import BurgerMenu from '@features/BurgerMenu';
import { Mail, MapIcon, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 mx-auto bg-primary-foreground">
      <div className="container mx-auto px-4 py-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-shrink-0">
            {location.pathname !== '/' ? (
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img
                  src="/logo2.png"
                  alt="logo"
                  className="h-auto max-h-16 w-auto"
                />
              </Link>
            ) : (
              <img
                src="./logo2.png"
                alt="logo"
                className="h-auto max-h-16 w-auto"
              />
            )}
          </div>
          
          <div className="hidden items-center gap-5 text-sm xl:flex">
            <div className="flex items-center gap-1.5">
              <PhoneCall size="15px" color="#00ce6e" />
              <a
                href="tel:+73512694916"
                className="whitespace-nowrap hover:text-primary transition-colors">
                +7(351)269-49-16
              </a>
            </div>
            
            <div className="flex items-center gap-1.5">
              <Mail size="15px" color="#00ce6e" />
              <a
                href="mailto:lesnayazastava@bk.ru"
                className="whitespace-nowrap hover:text-primary transition-colors">
                lesnayazastava@bk.ru
              </a>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span className="text-xs whitespace-nowrap">ссылки на соц. сети:</span>
              <a
                href="https://vk.com/lesnaya_zastava74"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-80">
                <img
                  width={25}
                  height={25}
                  alt="Лесная застава ВК"
                  src="/vk.png"
                />
              </a>
              <a
                href="https://vk.com/leszastava"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-80">
                <img
                  width={25}
                  height={25}
                  alt="Лесная застава ВК"
                  src="/vk.png"
                />
              </a>
              <a
                href="https://max.ru/join/bsb3iWwuMsjaA8gHhfGqf9cIMQt2SGhEWYoMBe_2QjM"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-opacity hover:opacity-80">
                <img
                  width={25}
                  height={25}
                  alt="Лесная застава MAX"
                  src="/max.png"
                />
              </a>
            </div>
            
            <a
              href="https://yandex.ru/maps/-/CHcLVYnh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <MapIcon size="15px" color="#00ce6e" />
              <span className="max-w-[180px] text-xs leading-tight">
                Челябинская область, Сосновский район, д. Ключевка, "Лесная застава"
              </span>
            </a>
            
            <ModeToggle />
          </div>
          
          <BurgerMenu />
        </div>

        <nav className="hidden justify-end py-2 xl:flex">
          <ul className="flex flex-wrap items-center gap-3 text-sm font-medium uppercase" style={{ letterSpacing: 'normal', fontStretch: 'normal' }}>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/about"
                className={`transition-colors duration-200 hover:underline ${
                  location.pathname.includes('/about')
                    ? 'text-primary underline'
                    : 'no-underline'
                }`}>
                О ЦЕНТРЕ
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/projects"
                className={`transition-colors duration-200 hover:underline ${
                  location.pathname.includes('/projects')
                    ? 'text-primary underline'
                    : 'no-underline'
                }`}>
                ПРОЕКТЫ И УСЛУГИ
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/recreationOrganizedGroups"
                className={`transition-colors duration-200 hover:underline ${
                  location.pathname.includes('/recreationOrganizedGroups')
                    ? 'text-primary underline'
                    : 'no-underline'
                }`}>
                ОТДЫХ ДЛЯ ОРГАНИЗОВАННЫХ ГРУПП ДЕТЕЙ
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/holidaycamp"
                className={`transition-colors duration-200 hover:underline ${
                  location.pathname.includes('/holidaycamp')
                    ? 'text-primary underline'
                    : 'no-underline'
                }`}>
                ДЕТСКИЙ ОТДЫХ
              </Link>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                to="/contacts"
                className={`transition-colors duration-200 hover:underline ${
                  location.pathname.includes('/contacts')
                    ? 'text-primary underline'
                    : 'no-underline'
                }`}>
                КОНТАКТЫ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
