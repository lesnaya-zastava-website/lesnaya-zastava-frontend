import type { dataEnumType, dataInfoType } from './model';

export const CardCollection: React.FC<{
  costInRub: string;
  dataEnum: dataEnumType[];
  dataInfo: dataInfoType[];
}> = ({ costInRub, dataEnum, dataInfo }) => {
  return (
    <>
      <div className="rounded-lg border p-6">
        <h3 className="mb-3 font-medium">
          Средняя стоимость одного дня пребывания
        </h3>
        <p className="mb-2 text-2xl font-bold">{costInRub} ₽</p>
        <p className="text-sm">
          Включает питание, проживание и все мероприятия
        </p>
      </div>

      {dataEnum.map(value => (
        <>
          <div className="rounded-lg border p-6">
            <h3 className="mb-3 font-medium">{value.title}</h3>
            <ul className="space-y-2 text-sm">
              {value.dataEnum.map(value => (
                <li>• {value}</li>
              ))}
            </ul>
          </div>
        </>
      ))}

      {dataInfo.map(value => (
        <>
          <div className="rounded-lg border p-6">
            <h3 className="mb-3 font-medium">{value.title}</h3>
            <p className="mb-2 text-sm">{value.content}</p>
          </div>
        </>
      ))}
    </>
  );
};
