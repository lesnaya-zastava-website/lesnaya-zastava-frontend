export const CardAnnouncement: React.FC<{
  title: string;
  date: string;
  srcImg: string;
  altImg?: string;
}> = ({ title, date, srcImg, altImg }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={srcImg}
        alt={altImg ? altImg : ''}
        width={400}
        height={200}
        className="h-48 w-full object-cover"
      />
      <div className="bg-gray-50 p-4">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
  );
};
