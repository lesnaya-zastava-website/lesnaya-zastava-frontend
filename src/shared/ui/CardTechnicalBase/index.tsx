import type { dataTechnicalBase } from './model';

export const CardTechnicalBase: React.FC<{
  data: dataTechnicalBase[];
  srcImg: string;
  altImg?: string;
}> = ({ data, srcImg, altImg }) => {
  return (
    <div className="flex flex-col gap-6 text-justify">
      <div className="flex flex-col gap-6">
        <img
          src={srcImg}
          alt={altImg || ''}
          className="h-auto w-full rounded-lg object-cover lg:mx-auto lg:w-2/3"
        />
      </div>
      <div>
        {data.map(value => (
          <>
            <h3 className="mb-2 font-medium">{value.title}</h3>
            <p className="mb-4 text-sm">{value.content}</p>
          </>
        ))}
      </div>
    </div>
  );
};
