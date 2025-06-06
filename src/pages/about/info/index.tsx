import { PageHeading } from '@shared/PageHeading';

export const Info: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-b border-gray-200 pb-8">
        <PageHeading>Основные сведения</PageHeading>

        <dl className="grid gap-4 text-base">
          <div>
            <dt className="font-semibold">Полное наименование:</dt>
            <dd>Оздоровительный комплекс "Лесная застава"</dd>
          </div>
          <div>
            <dt className="font-semibold">Сокращённое наименование:</dt>
            <dd>ОК "Лесная застава"</dd>
          </div>
          <div>
            <dt className="font-semibold">ФИО руководителя:</dt>
            <dd>Иванов Иван Иванович</dd>
          </div>
          <div>
            <dt className="font-semibold">Юридический адрес:</dt>
            <dd>454008, г. Челябинск, Свердловский тракт, 24 АО "ЧЦЗ"</dd>
          </div>
          <div>
            <dt className="font-semibold">Фактический адрес:</dt>
            <dd>
              456518, Россия, Челябинская область, Сосновский р-н, п.
              Долгодеревенское, д. Ключевка ОК "Лесная застава"
            </dd>
          </div>
          <div>
            <dt className="font-semibold">ИНН/КПП:</dt>
            <dd>7448000013 / 744801001</dd>
          </div>
          <div>
            <dt className="font-semibold">ОГРН:</dt>
            <dd>1234567890123</dd>
          </div>
          <div>
            <dt className="font-semibold">Режим работы:</dt>
            <dd>Пн–Пт, с 9:00 до 18:00</dd>
          </div>
          <div>
            <dt className="font-semibold">Банковские реквизиты:</dt>
            <dd>
              Р/с 4070281060294000232 в ПАО "МОСКОВСКИЙ КРЕДИТНЫЙ БАНК", г.
              Москва
            </dd>
          </div>
          <div>
            <dt className="font-semibold">К/с:</dt>
            <dd>3010181014525000659</dd>
          </div>
          <div>
            <dt className="font-semibold">БИК:</dt>
            <dd>044525659</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
