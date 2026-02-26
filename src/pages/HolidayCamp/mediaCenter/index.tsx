import { PageHeading } from '@/shared/ui/PageHeading';
import { useEffect, useState, useRef } from 'react';
import { useMediaCenterGallery } from '@/entities/holidayCamp/mediaCenter/model/useMediaCenterGallery';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';
import { Loader } from '@/shared/ui/components/ui/loader';

declare global {
  interface Window {
    VK: any;
  }
}

const VK_SCRIPT_SRC = 'https://vk.com/js/api/openapi.js?173';
const VK_SCRIPT_ID = 'vk-openapi-script';
const VK_GROUP_ID = 80071046;

export const MediaCenter: React.FC = () => {
  const [isScriptReady, setIsScriptReady] = useState(false);
  const widgetInitialized = useRef(false);
  const retryTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    data: dataGallery,
    isLoading: isLoadingGallery,
    isError: isErrorGallery,
    isSuccess: isSuccessGallery,
  } = useMediaCenterGallery();

  useEffect(() => {
    // Если скрипт уже есть в DOM (например, после навигации)
    const existingScript = document.getElementById(VK_SCRIPT_ID);

    if (existingScript) {
      // Скрипт уже загружен — сразу помечаем как готовый
      setIsScriptReady(true);
      return;
    }

    const script = document.createElement('script');
    script.src = VK_SCRIPT_SRC;
    script.async = true;
    script.id = VK_SCRIPT_ID;
    document.body.appendChild(script);

    script.onload = () => {
      setIsScriptReady(true);
    };

    script.onerror = () => {
      console.error('Не удалось загрузить VK OpenAPI script');
    };

    return () => {
      if (retryTimer.current) clearTimeout(retryTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!isScriptReady) return;

    const tryInitWidget = () => {
      const vkGroupsElement = document.getElementById('vk_groups');

      if (!vkGroupsElement) return;

      // Если виджет уже вставлен — не дублируем
      if (widgetInitialized.current || vkGroupsElement.innerHTML) return;

      if (window.VK?.Widgets?.Group) {
        window.VK.Widgets.Group(
          'vk_groups',
          {
            mode: 4,
            wide: 1,
            height: 800,
            width: Math.min(window.innerWidth - 48, 1200),
            color1: 'FFFFFF',
            color2: '000000',
            color3: '435C56',
          },
          VK_GROUP_ID,
        );
        widgetInitialized.current = true;
      } else {
        // VK объект ещё не готов — повторяем через 300мс
        retryTimer.current = setTimeout(tryInitWidget, 300);
      }
    };

    tryInitWidget();

    return () => {
      if (retryTimer.current) clearTimeout(retryTimer.current);
      widgetInitialized.current = false;
      const el = document.getElementById('vk_groups');
      if (el) el.innerHTML = '';
    };
  }, [isScriptReady, isSuccessGallery]);

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Медиа-центр лагеря</PageHeading>

        {isLoadingGallery && <Loader />}

        {isErrorGallery && (
          <p className="text-red-500">Ошибка при загрузке галереи</p>
        )}

        {isSuccessGallery && dataGallery && dataGallery.length > 0 && (
          <div className="mb-8">
            <PhotoGallery
              photos={
                dataGallery.flatMap(item =>
                  item.photo.map(p => ({
                    url: p.url,
                    name: p.name,
                  }))
                )
              }
            />
          </div>
        )}

        <div className="flex justify-center py-2">
          <div
            style={{ maxWidth: '100%' }}
            id="vk_groups"
          />
        </div>
      </div>
    </section>
  );
};
