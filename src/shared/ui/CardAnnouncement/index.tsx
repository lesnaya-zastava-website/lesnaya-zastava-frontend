interface CardAnnouncementProps {
  title: string;
  content: string;
  srcImg: string;
  altImg?: string;
}

export const CardAnnouncement: React.FC<CardAnnouncementProps> = ({
  title,
  content,
  srcImg,
  altImg,
}) => {
  return (
    <div className="overflow-hidden rounded-lg border shadow-md">
      <img
        src={srcImg}
        alt={altImg || ''}
        width={400}
        height={200}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};
