import type { Photo } from '@entities/gallery/model/types';
import { API_BASE_URL } from '@shared/api/baseApi';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ZoomIn, ZoomOut } from 'lucide-react';

interface GallerySliderProps<T> {
  items: T[];
  getPhoto: (item: T) => Photo;
}

export const GallerySlider = <T,>({
  items,
  getPhoto,
}: GallerySliderProps<T>) => {
  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <PhotoProvider
          pullClosable={false}
          maskClosable={false}
          toolbarRender={({ onScale, scale }) => (
            <div className="flex gap-2">
              <ZoomIn
                className="transition hover:text-primary"
                onClick={() => onScale(scale + 1)}
              />
              <ZoomOut
                className="transition hover:text-primary"
                onClick={() => onScale(scale - 1)}
              />
            </div>
          )}>
          {items.map((item, index) => {
            const photo = getPhoto(item);
            return (
              <PhotoView
                key={index}
                src={`${API_BASE_URL}${photo.url}`}>
                <img
                  src={`${API_BASE_URL}${photo.url}`}
                  alt={photo.name}
                />
              </PhotoView>
            );
          })}
        </PhotoProvider>
      </div>
    </div>
  );
};
