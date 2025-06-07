import type { dataMediaType } from './model';
import { Link } from 'react-router-dom';

export const CardMediaCenter: React.FC<{
  dataMedia: dataMediaType[];
}> = ({ dataMedia }) => {
  return (
    <>
      <div className="rounded-lg p-6 border">
        <h3 className="mb-4 text-center font-medium">
          Интеграция новостей из группы ВК Детского лагеря
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {dataMedia.map(value => (
            <>
              <div className="overflow-hidden rounded-lg border ">
                <img
                  src={value.srcImg}
                  alt={value.altImg}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs ">{value.date}</p>
                  <h4 className="mb-2 font-medium">{value.title}</h4>
                  <p className="text-sm ">{value.message}</p>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link
            to="https://vk.com"
            className="text-sm underline">
            Перейти в группу ВК
          </Link>
        </div>
      </div>
    </>
  );
};
