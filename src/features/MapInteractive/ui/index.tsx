import { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize, Minimize, ZoomIn, ZoomOut } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import mapImage from '@features/MapInteractive/assets/map.svg';
import { ImageWithLoader } from '@/shared/ui/components/ui/image-with-loader';
import { Carousel, CarouselContent, CarouselItem } from '@/shared/ui/components/ui/carousel';
import { API_BASE_URL } from '@/shared/api/baseApi';

export type MapPoint = {
  id: string;
  title: string;
  label: string;
  images: string[];
  top: string;
  left: string;
};


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

  // Запрос точек карты из Strapi
  const { data: mapPointsData, isLoading, error } = useQuery({
    queryKey: ['map-points'],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/api/karta-infrastrukturies?populate=*&pagination[limit]=total`);
      if (!response.ok) {
        throw new Error('Failed to fetch map points');
      }
      return response.json();
    },
  });

  // Адаптация данных из Strapi формата
  const mapPoints: MapPoint[] = mapPointsData?.data?.map((point: any) => ({
    id: point.id.toString(),
    title: point.title,
    label: point.label,
    images: point.images?.map((img: any) => `${API_BASE_URL}${img.url}`) || [],
    top: point.top,
    left: point.left,
  })) || [];

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

        // Для мобильных устройств используем больший масштаб для лучшей видимости
        const isMobile = window.innerWidth < 768;
        const autoScale = isMobile ? Math.max(scaleX, scaleY) : Math.min(scaleX, scaleY);

        setScale(Math.max(autoScale, 0.8)); // Минимальный масштаб 0.8
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

  // Показываем лоадер во время загрузки
  if (isLoading) {
    return (
      <div className="mb-5 w-full rounded-2xl bg-white p-4">
        <div className="flex h-64 items-center justify-center">
          <div className="text-center">
            <div className="mb-2 h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto"></div>
            <p className="text-gray-600">Загрузка карты...</p>
          </div>
        </div>
      </div>
    );
  }

  // Показываем ошибку если запрос не удался
  if (error) {
    return (
      <div className="mb-5 w-full rounded-2xl bg-white p-4">
        <div className="flex h-64 items-center justify-center">
          <div className="text-center text-red-600">
            <p className="mb-2">Ошибка загрузки карты</p>
            <p className="text-sm text-gray-600">Попробуйте обновить страницу</p>
          </div>
        </div>
      </div>
    );
  }

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
            transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging || isMouseDragging || lastTouchDistance !== null ? 'none' : 'transform 0.08s ease-out',
            touchAction: 'none',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            ...(isFullscreen && {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate3d(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px), 0) scale(${scale})`,
            }),
          }}>
          <ImageWithLoader
            src={mapImage}
            alt="Интерактивная карта"
            className={`select-none ${isFullscreen ? 'max-h-[100vh] max-w-[100vw] object-contain' : 'w-full'}`}
            draggable={false}
            showSpinner={false}
            style={{
              ...(isFullscreen && {
                maxHeight: '100vh',
                maxWidth: '100vw',
                height: 'auto',
                width: 'auto',
              }),
            }}
          />
        {mapPoints.map(({ id, label, title, top, left, images }) => {
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
                ? 'bottom-full mb-3 sm:mb-4 md:mb-3' // точка слишком снизу — показываем tooltip сверху
                : 'top-full mt-3 sm:mt-4 md:mt-3'; // иначе — показываем снизу

            return (
              <div
                key={id}
                style={{
                  top,
                  left,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isActive ? 9999 : 20
                }}
                className="absolute">
                <button
                  type="button"
                  onClick={() => handleToggle(id)}
                  className="relative flex flex-col items-center justify-center focus:outline-none">
                  <div
                    className={`absolute ${verticalPositionClass} flex transform flex-col items-center transition-all duration-200 ${horizontalAlignClass} ${
                      isActive
                        ? 'pointer-events-auto z-[9999] scale-100 opacity-100'
                        : 'pointer-events-none scale-95 opacity-0'
                    }`}>
                    {images && images.length > 0 && (
                      <div className="mb-2 w-[120px] sm:w-[160px] md:w-[200px] max-w-xs">
                        {images.length === 1 ? (
                          <ImageWithLoader
                            src={images[0]}
                            alt={title}
                            className="w-full rounded-xl border border-gray-300 shadow-xl object-cover"
                          />
                        ) : (
                          <Carousel>
                            <CarouselContent>
                              {images.map((imageUrl, index) => (
                                <CarouselItem key={index}>
                                  <ImageWithLoader
                                    src={imageUrl}
                                    alt={`${title} - изображение ${index + 1}`}
                                    className="w-full rounded-xl border border-gray-300 shadow-xl object-cover"
                                  />
                                </CarouselItem>
                              ))}
                            </CarouselContent>
                          </Carousel>
                        )}
                        {images.length > 1 && (
                          <div className="mt-1 bg-white/90 backdrop-blur-sm rounded px-2 py-1 border border-gray-200 shadow-sm">
                            <p className="text-center text-xs text-gray-700 font-medium">
                              Перетащите для просмотра изображений
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                    <span className="rounded bg-white px-2 py-1 text-[10px] sm:text-xs font-medium text-gray-800 shadow-md">
                      {title}
                    </span>
                  </div>

                  {/* Метка */}
                  <span
                    className={`flex min-h-3 min-w-3 sm:min-h-4 sm:min-w-4 md:min-h-5 md:min-w-5 lg:min-h-6 lg:min-w-6 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:h-5 lg:h-6 lg:w-6 aspect-square items-center justify-center rounded-full bg-blue-600 text-[8px] sm:text-[10px] md:text-xs font-bold text-white shadow-md transition-all p-[10px] ${
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
