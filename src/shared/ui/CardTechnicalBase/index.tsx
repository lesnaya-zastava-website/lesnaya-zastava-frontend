import type { dataTechnicalBase } from './model';

export const CardTechnicalBase: React.FC<{
  data: dataTechnicalBase[]
  srcImg: string;
  altImg?: string;
}> = ({ data , srcImg, altImg}) => {
  const firstBlock = data.slice(0, 2);
  const secondBlock = data.slice(2);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 sm:flex-row">
        <img
          src={srcImg}
          alt={altImg ? altImg : ''}
          width={300}
          height={200}
          className="h-auto w-full rounded-lg object-cover sm:w-1/3"
        />
        <div className="sm:w-2/3">
          {firstBlock.map(value => (
            <>
              <h3 className="mb-2 font-medium">{value.title}</h3>
              <p className="mb-4 text-sm ">{value.content}</p>
            </>
          ))}
        </div>
      </div>
      <div>
        {secondBlock.map(value => (
          <>
            <h3 className="mb-2 font-medium">{value.title}</h3>
            <p className="mb-4 text-sm ">{value.content}</p>
          </>
        ))}
      </div>
    </div>
  );
};
