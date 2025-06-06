import type { dataEnumType, dataInfoType } from './model';

export const CardCollection: React.FC<{
  costInRub: string;
  dataEnum: dataEnumType[];
  dataInfo: dataInfoType[];
}> = ({ costInRub, dataEnum, dataInfo }) => {
  return (
    <>
      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="mb-3 font-medium">
          Средняя стоимость одного дня пребывания
        </h3>
        <p className="mb-2 text-2xl font-bold text-gray-800">{costInRub} ₽</p>
        <p className="text-sm text-gray-600">
          Включает питание, проживание и все мероприятия
        </p>
      </div>

      {dataEnum.map(value => (
        <>
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="mb-3 font-medium">{value.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {value.dataEnum.map(value => (
                <li>• {value}</li>
              ))}
            </ul>
          </div>
        </>
      ))}

      {dataInfo.map(value => (
        <>
          <div className="rounded-lg bg-gray-50 p-6">
            <h3 className="mb-3 font-medium">{value.title}</h3>
            <p className="mb-2 text-sm text-gray-600">{value.content}</p>
          </div>
        </>
      ))}
    </>
  );
};
