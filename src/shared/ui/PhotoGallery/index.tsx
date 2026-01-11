import { API_BASE_URL } from '@/shared/api/baseApi';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { ZoomIn, ZoomOut } from 'lucide-react';
import { ImageWithLoader } from '@/shared/ui/components/ui/image-with-loader';

interface Photo {
  url: string;
  name?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
}

/**
 * Универсальный компонент галереи для отображения фотографий
 * Использует адаптивную сетку: 1 колонка на мобильных, 2 на планшетах, 3-4 на десктопе
 */
export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  className = '',
}) => {
  if (!photos || photos.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full ${className}`}>
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
          {photos.map((photo, index) => (
            <PhotoView
              key={index}
              src={`${API_BASE_URL}${photo.url}`}>
              <ImageWithLoader
                src={`${API_BASE_URL}${photo.url}`}
                alt={photo.name || `Фото ${index + 1}`}
                className="h-full w-full cursor-pointer rounded-lg object-cover transition hover:opacity-90"
                spinnerSize="sm"
              />
            </PhotoView>
          ))}
        </PhotoProvider>
      </div>
    </div>
  );
};


