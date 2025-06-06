export const CardEmployee: React.FC<{
  fullName: string;
  post: string;
  qualification: string;
  specialization: string;
  srcImg: string;
  altImg?: string;
}> = ({ fullName, post, qualification, specialization, srcImg, altImg }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-gray-50 p-4 sm:flex-row">
      <img
        src={srcImg}
        alt={altImg ? altImg : ''}
        width={120}
        height={120}
        className="h-24 w-24 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium">{fullName}</h3>
        <p className="text-sm text-gray-600">{post}</p>
        <p className="text-sm text-gray-600">{qualification}</p>
        <p className="text-sm text-gray-600">{specialization}</p>
      </div>
    </div>
  );
};
