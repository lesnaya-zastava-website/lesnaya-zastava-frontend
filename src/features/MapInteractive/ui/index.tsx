import { useState, useEffect, useRef, useCallback } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { Maximize, Minimize, ZoomIn, ZoomOut } from 'lucide-react';
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMouseDragging, setIsMouseDragging] = useState(false);
  const [mouseDragStart, setMouseDragStart] = useState({ x: 0, y: 0 });
  const [lastTouchDistance, setLastTouchDistance] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);

  // Функция для ограничения позиции карты в пределах контейнера
  const constrainPosition = useCallback((
    x: number,
    y: number,
    currentScale: number,
    container: HTMLElement | null,
  ) => {
    if (!container || !wrapperRef.current) {
      return { x, y };
    }

    const img = wrapperRef.current.querySelector('img');
    if (!img) {
      return { x, y };
    }

    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    // Получаем реальные размеры изображения
    const imgWidth = img.naturalWidth || img.clientWidth;
    const imgHeight = img.naturalHeight || img.clientHeight;

    // Вычисляем размеры с учетом масштаба
    const scaledWidth = imgWidth * currentScale;
    const scaledHeight = imgHeight * currentScale;

    // Вычисляем максимальные смещения (чтобы карта не выходила за границы)
    const maxX = Math.max(0, (scaledWidth - containerWidth) / 2);
    const maxY = Math.max(0, (scaledHeight - containerHeight) / 2);

    // Ограничиваем позицию
    const constrainedX = Math.max(-maxX, Math.min(maxX, x));
    const constrainedY = Math.max(-maxY, Math.min(maxY, y));

    return { x: constrainedX, y: constrainedY };
  }, []);

  // Полноэкранный режим
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!fullscreenRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await fullscreenRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Ошибка при переключении полноэкранного режима:', error);
    }
  };

  // Обработка клика вне области
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

  // Pinch-to-zoom и drag для мобильных
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    const getDistance = (touches: TouchList) => {
      const touch1 = touches[0];
      const touch2 = touches[1];
      const dx = touch2.clientX - touch1.clientX;
      const dy = touch2.clientY - touch1.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        // Pinch-to-zoom
        e.preventDefault();
        const distance = getDistance(e.touches);
        setLastTouchDistance(distance);
      } else if (e.touches.length === 1) {
        // Drag
        const touch = e.touches[0];
        setIsDragging(true);
        setDragStart({
          x: touch.clientX - position.x,
          y: touch.clientY - position.y,
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && lastTouchDistance !== null) {
        // Pinch-to-zoom
        e.preventDefault();
        const distance = getDistance(e.touches);
        const scaleChange = distance / lastTouchDistance;
        const newScale = Math.max(0.5, Math.min(3, scale * scaleChange));
        setScale(newScale);
        // При изменении масштаба пересчитываем позицию с ограничениями
        const constrained = constrainPosition(position.x, position.y, newScale, container);
        setPosition(constrained);
        setLastTouchDistance(distance);
      } else if (e.touches.length === 1 && isDragging) {
        // Drag
        e.preventDefault();
        const touch = e.touches[0];
        const newX = touch.clientX - dragStart.x;
        const newY = touch.clientY - dragStart.y;
        
        // Ограничиваем перемещение
        const constrainedPosition = constrainPosition(newX, newY, scale, container);
        setPosition(constrainedPosition);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setLastTouchDistance(null);
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scale, position, isDragging, dragStart, lastTouchDistance]);

  // Сброс масштаба при выходе из полноэкранного режима и автоматическое масштабирование при входе
  useEffect(() => {
    if (!isFullscreen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      // При входе в полноэкранный режим автоматически подгоняем масштаб
      const container = mapContainerRef.current;
      const img = wrapperRef.current?.querySelector('img');
      if (container && img) {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const imgWidth = img.naturalWidth || img.clientWidth;
        const imgHeight = img.naturalHeight || img.clientHeight;
        
        const scaleX = containerWidth / imgWidth;
        const scaleY = containerHeight / imgHeight;
        const autoScale = Math.min(scaleX, scaleY, 1); // Не увеличиваем, только уменьшаем если нужно
        
        if (autoScale < 1) {
          setScale(autoScale);
        }
        setPosition({ x: 0, y: 0 });
      }
    }
  }, [isFullscreen]);

  const handleZoomIn = () => {
    setScale(prev => {
      const newScale = Math.min(3, prev + 0.2);
      // При изменении масштаба пересчитываем позицию с ограничениями
      const container = mapContainerRef.current;
      const constrained = constrainPosition(position.x, position.y, newScale, container);
      setPosition(constrained);
      return newScale;
    });
  };

  const handleZoomOut = () => {
    setScale(prev => {
      const newScale = Math.max(0.5, prev - 0.2);
      // При изменении масштаба пересчитываем позицию с ограничениями
      const container = mapContainerRef.current;
      const constrained = constrainPosition(position.x, position.y, newScale, container);
      setPosition(constrained);
      return newScale;
    });
  };

  // Обработка колесика мыши для зума на ПК
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // Проверяем, что зажат Ctrl (или Cmd на Mac) для зума колесиком
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setScale(prev => {
          const newScale = Math.max(0.5, Math.min(3, prev + delta));
          // При изменении масштаба пересчитываем позицию с ограничениями
          const constrained = constrainPosition(position.x, position.y, newScale, container);
          setPosition(constrained);
          return newScale;
        });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Обработка перетаскивания мышью на ПК
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      // Проверяем, что нажата левая кнопка мыши и не на кнопке управления
      if (e.button === 0 && !(e.target as HTMLElement).closest('button')) {
        e.preventDefault();
        setIsMouseDragging(true);
        setMouseDragStart({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        });
        container.style.cursor = 'grabbing';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMouseDragging) {
        e.preventDefault();
        const newX = e.clientX - mouseDragStart.x;
        const newY = e.clientY - mouseDragStart.y;
        
        // Ограничиваем перемещение
        const constrainedPosition = constrainPosition(newX, newY, scale, container);
        setPosition(constrainedPosition);
      }
    };

    const handleMouseUp = () => {
      if (isMouseDragging) {
        setIsMouseDragging(false);
        container.style.cursor = '';
      }
    };

    const handleMouseLeave = () => {
      if (isMouseDragging) {
        setIsMouseDragging(false);
        container.style.cursor = '';
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMouseDragging, mouseDragStart, position]);

  const handleToggle = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <div
      ref={fullscreenRef}
      className={`mb-5 w-full rounded-2xl bg-white p-4 ${isFullscreen ? 'fixed inset-0 z-[9999] m-0 rounded-none' : 'relative overflow-hidden'}`}>
      {/* Кнопки управления */}
      <div className="absolute right-4 top-4 z-40 flex gap-2">
        <button
          type="button"
          onClick={handleZoomIn}
          className="rounded-full bg-primary p-2 shadow-lg transition hover:bg-primary/90"
          aria-label="Увеличить">
          <ZoomIn className="h-5 w-5 text-primary-foreground" />
        </button>
        <button
          type="button"
          onClick={handleZoomOut}
          className="rounded-full bg-primary p-2 shadow-lg transition hover:bg-primary/90"
          aria-label="Уменьшить">
          <ZoomOut className="h-5 w-5 text-primary-foreground" />
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          className="rounded-full bg-primary p-2 shadow-lg transition hover:bg-primary/90"
          aria-label={isFullscreen ? 'Выйти из полноэкранного режима' : 'Полноэкранный режим'}>
          {isFullscreen ? (
            <Minimize className="h-5 w-5 text-primary-foreground" />
          ) : (
            <Maximize className="h-5 w-5 text-primary-foreground" />
          )}
        </button>
      </div>

      <div
        ref={mapContainerRef}
        className={`relative ${isFullscreen ? 'h-full w-full overflow-hidden' : 'overflow-auto'} ${isMouseDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
        <div
          ref={wrapperRef}
          className="relative"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging || isMouseDragging || lastTouchDistance !== null ? 'none' : 'transform 0.1s ease-out',
            touchAction: 'none',
            ...(isFullscreen && {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale})`,
            }),
          }}>
          <img
            src={mapImage}
            alt="Интерактивная карта"
            className={`select-none ${isFullscreen ? 'max-h-[100vh] max-w-[100vw] object-contain' : 'w-full'}`}
            draggable={false}
            style={{
              ...(isFullscreen && {
                maxHeight: '100vh',
                maxWidth: '100vw',
                height: 'auto',
                width: 'auto',
              }),
            }}
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

      {/* Подсказка для мобильных */}
      {!isFullscreen && (
        <p className="mt-2 text-center text-xs text-gray-500 md:hidden">
          Используйте жесты для увеличения и перемещения карты
        </p>
      )}
    </div>
  );
};

export default MapInteractive;
