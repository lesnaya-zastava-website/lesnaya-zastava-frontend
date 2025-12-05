import { PageHeading } from '@/shared/ui/PageHeading';
import { useEffect, useState, useRef } from 'react';

declare global {
  interface Window {
    VK: any;
  }
}

export const MediaCenter: React.FC = () => {
  const scriptLoaded = useRef(false); // Флаг загрузки скрипта
  const [isScriptReady, setIsScriptReady] = useState(false); // Стейт готовности скрипта

  useEffect(() => {
    if (scriptLoaded.current) return; // Если скрипт уже загружен, ничего не делаем

    const script = document.createElement('script');
    script.src = 'https://vk.com/js/api/openapi.js?168';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      scriptLoaded.current = true;
      setIsScriptReady(true);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (isScriptReady && window.VK) {
      const vkGroupsElement = document.getElementById('vk_groups');
      if (vkGroupsElement && !vkGroupsElement.innerHTML) {
        window.VK.Widgets.Group(
          'vk_groups',
          {
            mode: 4,
            wide: 1,
            height: 800,
            width: window.innerWidth / 1.5,
            color1: 'FFFFFF',
            color2: '000000',
            color3: '435C56',
          },
          80071046,
        );
      }
    }
  }, [isScriptReady]);

  return (
    <section className="mx-auto px-4 py-4 sm:px-6 md:px-10 lg:px-20">
       <PageHeading>Медиа-центр лагеря</PageHeading>
      <div className="container mx-auto flex justify-center py-2">
       
        <div
          style={{ maxWidth: '100%' }}
          id="vk_groups"></div>
      </div>
    </section>
  );
};
