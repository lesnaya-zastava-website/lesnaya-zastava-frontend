import { PhotoGallery } from '@/shared/ui/PhotoGallery';

interface CardAnnouncementProps {
  title?: string;
  content?: string;
  photo: Array<{
    id: number;
    url: string;
    name: string;
  }>;
}

export const CardAnnouncement: React.FC<CardAnnouncementProps> = ({
  title,
  content,
  photo,
}) => {
  // Используем только основные фото (url в корне объекта), игнорируя formats
  // В API структуре url уже в корне объекта фото, formats содержит только thumbnail/small/medium/large
  const mainPhotos = photo
    ?.map(p => ({
      url: p.url,
      name: p.name || `Фото ${p.id}`,
    })) || [];

  return (
    <div className="flex flex-col gap-4">
      {mainPhotos.length > 0 && (
        <PhotoGallery
          photos={mainPhotos}
        />
      )}
      {(title || content) && (
        <div className="p-4">
          {title && <h3 className="font-medium">{title}</h3>}
          {content && <p className="text-sm">{content}</p>}
        </div>
      )}
    </div>
  );
};
