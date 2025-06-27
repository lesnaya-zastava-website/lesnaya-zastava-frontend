import { API_BASE_URL } from '@shared/api/baseApi';

interface CardAnnouncementProps {
  title: string;
  content: string;
  photo: {
    url: string;
  };
}

export const CardAnnouncement: React.FC<CardAnnouncementProps> = ({
  title,
  content,
  photo,
}) => {
  return (
    <div className="">
      <img
        className="max-w-full"
        src={`${API_BASE_URL}${photo?.url}`}
        alt={title ? title : 'Фото'}
      />
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};
