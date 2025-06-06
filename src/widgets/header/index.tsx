import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const links: string[][] = [
    ['О ЦЕНТРЕ', '/'],
    ['ДЕТСКИЙ ОТДЫХ', '/ChildrenHolidaysDuringHolidays'],
    ['НАШИ ПРОЕКТЫ', '/'],
    ['УСЛУГИ', '/'],
    ['КОНТАКТЫ', '/'],
  ];

  return (
    <header className="bg-white px-20">
      <div className="mx-auto border-0 border-gray-200 sm:border-b">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 pt-5">
            <img
              src="./tempLogo.png"
              alt="logo"
              className="w-50"
            />
          </div>

          <div className="hidden items-center space-x-6 text-sm text-gray-600 md:flex">
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

        <nav className="hidden justify-end pt-4 pb-4 sm:flex">
          <ul className="flex items-center space-x-3 text-sm font-medium tracking-wide text-gray-700 uppercase">
            {links.map((value, index) => (
              <>
                <li>{index != 0 ? "|": ""}</li>
                <li key={index}>
                  <Link
                    to={value[1]}
                    className="transition-colors duration-200 hover:text-gray-900">
                    {value[0]}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
