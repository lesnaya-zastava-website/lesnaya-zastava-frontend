import { Link } from 'react-router-dom';

interface SectionCardProps {
  title: string;
  srcImage: string;
  altDesc: string;
  linkTo: string;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  title,
  srcImage,
  altDesc,
  linkTo,
}) => {
  return (
    <Link
      to={linkTo}
      className="relative block h-[224px] w-full p-2 sm:w-1/2 md:w-1/3 xl:w-1/2">
      <div className="relative h-full w-full overflow-hidden rounded-2xl text-white shadow-lg">
        <img
          src={srcImage}
          alt={altDesc}
          className="absolute top-0 left-0 h-full w-full object-cover brightness-40 transition-opacity duration-200 ease-out"
        />
        <div className="absolute bottom-[20px] left-[0px] font-bold text-white">
          <h2 className="sm:w-max-[200px] mx-4 text-xl leading-tight md:text-xl lg:text-2xl xl:text-4xl">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};
