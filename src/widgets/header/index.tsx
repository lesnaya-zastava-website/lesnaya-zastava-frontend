export const Header: React.FC = () => {
  return (
    <header className="bg-white px-20">
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 pt-5">
            <img
            src="./tempLogo.png"
            alt="logo"
            className='w-50'
          />
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
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
              <span>адрес</span>
            </div>
          </div>
        </div>

        <nav className="flex pt-4 pb-4 justify-end border-b border-gray-200">
          <ul className="flex flex-wrap items-center space-x-3 text-sm font-medium text-gray-700 uppercase tracking-wide">
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                О ЦЕНТРЕ
              </a>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                ДЕТСКИЙ ОТДЫХ
              </a>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                НАШИ ПРОЕКТЫ
              </a>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                УСЛУГИ
              </a>
            </li>
            <li className="text-gray-400">|</li>
            <li>
              <a href="#" className="hover:text-gray-900 transition-colors duration-200">
                КОНТАКТЫ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
