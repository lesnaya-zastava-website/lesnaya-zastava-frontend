import { useState, useEffect, useRef } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import mapImage from '@features/MapInteractive/assets/map.png';

export type MapPoint = {
  id: string;
  title: string;
  label: string;
  imageUrl: string;
  top: string;
  left: string;
};

export const MAP_POINTS: MapPoint[] = [
  {
    id: '4',
    label: '3',
    title: '3 корпус',
    imageUrl: '',
    top: '24%',
    left: '35%',
  },
  {
    id: '5',
    label: '4',
    title: '4 корпус',
    imageUrl: '',
    top: '24%',
    left: '42%',
  },
  {
    id: '6',
    label: '5',
    title: '5 корпус',
    imageUrl: '',
    top: '24%',
    left: '50%',
  },

  {
    id: '8',
    label: 'М1',
    title: 'Мангальная зона 1',
    imageUrl: '',
    top: '37%',
    left: '29%',
  },

  {
    id: '11',
    label: 'П',
    title: 'Прокат спортивного инвентаря',
    imageUrl: '',
    top: '42%',
    left: '45%',
  },

  {
    id: '15',
    label: 'Р2',
    title: 'Гостевая парковка',
    imageUrl: '',
    top: '65%',
    left: '50%',
  },

  {
    id: '17',
    label: 'М2',
    title: 'Мангальная зона 2',
    imageUrl: '',
    top: '81%',
    left: '15%',
  },
  {
    id: '16',
    label: 'М3',
    title: 'Мангальная зона 3',
    imageUrl: '',
    top: '77%',
    left: '10%',
  },
  {
    id: '20',
    label: 'В',
    title: 'Волейбольная площадка',
    imageUrl: '',
    top: '67%',
    left: '33%',
  },

  {
    id: '24',
    label: 'БП',
    title: 'Баскетбольная площадка',
    imageUrl: '/pages/about/infrastructure/map/Баскетбольная площадка.jpg',
    top: '65%',
    left: '70%',
  },
  {
    id: '25',
    label: 'Ф',
    title: 'Футбольное поле',
    imageUrl: '/pages/about/infrastructure/map/футбольное поле.jpg',
    top: '60%',
    left: '80%',
  },
  {
    id: '26',
    label: 'Т',
    title: 'Теннисный корт',
    imageUrl: '/pages/about/infrastructure/map/Теннисный корт.jpg',
    top: '50%',
    left: '90%',
  },

  {
    id: '28',
    label: 'К',
    title: 'Костровое место',
    imageUrl: '',
    top: '93%',
    left: '38%',
  },

  {
    id: '21',
    label: 'КПП',
    title: 'Контрольно-пропускной пункт',
    imageUrl: '',
    top: '75%',
    left: '43%',
  },

  {
    id: '13',
    label: '7',
    title: '7 корпус',
    imageUrl: '/pages/about/infrastructure/map/7 корпус.jpg',
    top: '50%',
    left: '10%',
  },

  {
    id: '31',
    label: 'У',
    title: 'Учебный корпус',
    imageUrl: '/pages/about/infrastructure/map/Учебный корпус.jpg',
    top: '50%',
    left: '25%',
  },

  {
    id: '27',
    label: 'W',
    title: 'WORKOUT-площадка',
    imageUrl: '/pages/about/infrastructure/map/воркаут зона.jpg',
    top: '93%',
    left: '12%',
  },
  {
    id: '12',
    label: 'Л',
    title: 'Летний театр',
    imageUrl: '/pages/about/infrastructure/map/Летний театр.jpg',
    top: '40%',
    left: '80%',
  },
  {
    id: '10',
    label: 'А',
    title: 'Администрация / Конференц-зал',
    imageUrl: '/pages/about/infrastructure/map/административный.jpg',
    top: '40%',
    left: '42%',
  },

  {
    id: '18',
    label: 'Х',
    title: 'Хоккейная коробка',
    imageUrl: '/pages/about/infrastructure/map/хоккейная коробка (2).jpg',
    top: '65%',
    left: '26%',
  },
  {
    id: '19',
    label: 'Б',
    title: 'Крытый бассейн',
    imageUrl: '/pages/about/infrastructure/map/Бассейн.jpg',
    top: '60%',
    left: '30%',
  },
  {
    id: '30',
    label: 'ДП',
    title: 'Детская площадка',
    imageUrl:
      '/pages/about/infrastructure/map/Детская площадка на набережной.jpg',
    top: '93%',
    left: '32%',
  },
  {
    id: '9',
    label: '6',
    title: '6 корпус',
    imageUrl: '/pages/about/infrastructure/map/6 корпус.jpg',
    top: '44%',
    left: '66%',
  },
  {
    id: '7',
    label: '+',
    title: 'Медицинский центр',
    imageUrl: '/pages/about/infrastructure/map/Медицинский центр.jpg',
    top: '30%',
    left: '10%',
  },
  {
    id: '2',
    label: '1',
    title: '1 корпус',
    imageUrl: '/pages/about/infrastructure/map/1 корпус.jpg',
    top: '24%',
    left: '20%',
  },
  {
    id: '3',
    label: '2',
    title: '2 корпус',
    imageUrl: '/pages/about/infrastructure/map/2 корпус.jpg',
    top: '24%',
    left: '28%',
  },
  {
    id: '1',
    label: 'С',
    title: 'Спортивный комплекс',
    imageUrl: '/pages/about/infrastructure/map/Спортивный комплекс.jpg',
    top: '10%',
    left: '10%',
  },
  {
    id: '23',
    label: 'ЦВ',
    title: 'Центральные ворота',
    imageUrl: '/pages/about/infrastructure/map/Ворота.jpg',
    top: '83%',
    left: '55.5%',
  },
  {
    id: '29',
    label: 'Р1',
    title: 'Гостевая парковка',
    imageUrl: '/pages/about/infrastructure/map/парковка на набережной.jpg',
    top: '95%',
    left: '47%',
  },
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
    <div className="mb-5 w-full overflow-auto rounded-2xl bg-white p-4">
      <div
        ref={wrapperRef}
        className="relative max-w-none min-w-[800px]">
        <img
          src={mapImage}
          alt="Интерактивная карта"
          className="w-full select-none"
          draggable={false}
        />
        {[...MAP_POINTS]
          .sort((a, b) => (a.id === activeId ? 1 : b.id === activeId ? -1 : 0))
          .map(({ id, label, title, top, left, imageUrl }) => {
            const isActive = activeId === id;

            const topNum = parseFloat(top);
            const leftNum = parseFloat(left);

            // Горизонтальное позиционирование
            const horizontalAlignClass =
              leftNum < 20
                ? 'left-0 translate-x-0' // левый край
                : leftNum > 80
                  ? 'right-0 translate-x-0' // правый край
                  : 'left-1/2 -translate-x-1/2'; // центр

            // Вертикальное позиционирование
            const verticalPositionClass =
              topNum > 80
                ? 'bottom-full mb-3' // точка слишком снизу — показываем tooltip сверху
                : 'top-full mt-3'; // иначе — показываем снизу

            return (
              <div
                key={id}
                style={{ top, left, transform: 'translate(-50%, -50%)' }}
                className="absolute z-20">
                <button
                  type="button"
                  onMouseEnter={() => handleToggle(id)}
                  onMouseLeave={() => setActiveId(null)}
                  className="relative flex flex-col items-center justify-center focus:outline-none">
                  <div
                    className={`absolute ${verticalPositionClass} flex transform flex-col items-center transition-all duration-200 ${horizontalAlignClass} ${
                      isActive
                        ? 'pointer-events-auto z-[9999] scale-100 opacity-100'
                        : 'pointer-events-none scale-95 opacity-0'
                    }`}>
                    {imageUrl !== '' && (
                      <img
                        src={imageUrl}
                        alt={title}
                        className="mb-2 w-[240px] max-w-xs rounded-xl border border-gray-300 shadow-xl"
                      />
                    )}
                    <span className="rounded bg-white px-2 py-1 text-xs font-medium text-gray-800 shadow-md">
                      {title}
                    </span>
                  </div>

                  {/* Метка */}
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md transition-all ${
                      isActive ? 'ring-2 ring-blue-400 ring-offset-2' : ''
                    }`}>
                    {label}
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
