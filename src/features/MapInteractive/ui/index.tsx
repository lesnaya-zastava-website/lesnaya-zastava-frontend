import React, { useState, useEffect, useRef } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import mapImage from '@features/MapInteractive/assets/map_lz.png';

export type MapPoint = {
  id: string;
  title: string;
  top: string;
  left: string;
};

export const MAP_POINTS: MapPoint[] = [
  { id: 'pl', title: 'Спортивный комплекс', top: '15%', left: '29%' },
  { id: 'pl2', title: 'Дом творчества', top: '15%', left: '36%' },
  { id: 'pl3', title: 'Хоз.блок', top: '14%', left: '54%' },
  { id: 'pl4', title: 'Медицинский корпус', top: '29%', left: '25%' },
  { id: 'pl6', title: '1 корпус', top: '26%', left: '44%' },
  { id: 'pl7', title: '2 корпус', top: '25%', left: '51%' },
  { id: 'pl8', title: '3 корпус', top: '25%', left: '56%' },
  { id: 'pl9', title: '4 корпус', top: '25%', left: '61%' },
  { id: 'pl10', title: '5 корпус', top: '25%', left: '66%' },
  { id: 'pl12', title: '6 корпус', top: '37%', left: '67%' },
  { id: 'pl5', title: '7 корпус', top: '29%', left: '34%' },
  { id: 'pl11', title: 'Очистные сооружения', top: '38%', left: '28%' },
  { id: 'pl13', title: 'Котельная', top: '31%', left: '75%' },
  { id: 'pl14', title: 'Лесной театр', top: '45%', left: '77%' },
  { id: 'pl15', title: 'Теннисный корт', top: '63%', left: '79%' },
  { id: 'pl16', title: 'Футбольный стадион', top: '69%', left: '70%' },
  { id: 'pl17', title: 'Баскетбольная площадка', top: '69%', left: '61%' },
  { id: 'pl18', title: 'Центральные ворота', top: '70%', left: '52%' },
  { id: 'pl19', title: 'Администрация', top: '50%', left: '52%' },
  { id: 'pl20', title: 'Пляжный волейбол', top: '55%', left: '41%' },
  { id: 'pl21', title: 'Бассейн', top: '45%', left: '36%' },
  { id: 'pl22', title: 'Прокат коньков', top: '50%', left: '25%' },
  { id: 'pl23', title: 'Хоз.блок', top: '55%', left: '29.5%' },
  { id: 'pl24', title: 'Здание гаража', top: '59%', left: '34%' },
  { id: 'pl25', title: 'Хоз.блок', top: '63%', left: '38.5%' },
  { id: 'pl26', title: 'Охрана', top: '66%', left: '43%' },
];

const MapInteractive: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent | ReactMouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(evt.target as Node)
      ) {
        setActiveId(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggle = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full overflow-auto mb-5">
      <div
        ref={wrapperRef}
        className="relative max-w-none min-w-[800px]">
        <img
          src={mapImage}
          alt="Интерактивная карта"
          className="h-auto w-full select-none"
          draggable={false}
          onClick={() => setActiveId(null)}
        />

        {MAP_POINTS.map(({ id, title, top, left }) => {
          const isActive = activeId === id;
          return (
            <div
              key={id}
              style={{ top, left, transform: 'translate(-50%, -50%)' }}
              className="absolute">
              <button
                type="button"
                onClick={() => handleToggle(id)}
                className="relative flex items-center justify-center focus:outline-none">
                {/* Тултип */}
                <span
                  className={`absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded-lg bg-white px-3 py-1 text-sm whitespace-nowrap text-gray-800 shadow-xl transition-all duration-200 ease-out ${
                    isActive
                      ? 'pointer-events-auto scale-100 opacity-100'
                      : 'pointer-events-none scale-95 opacity-0'
                  }`}>
                  {title}
                </span>

                {/* Кнопка "i" */}
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-xs font-bold text-white shadow-lg transition-all ${
                    isActive ? 'ring-2 ring-blue-400 ring-offset-2' : ''
                  }`}>
                  i
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MapInteractive;
