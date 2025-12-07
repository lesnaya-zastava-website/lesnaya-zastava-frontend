import { PageHeading } from '@/shared/ui/PageHeading';

export const Info: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Основные сведения</PageHeading>

        <dl className="grid gap-4 text-base">
          <div>
            <dt className="font-semibold">Полное наименование:</dt>
            <dd>
              Филиал акционерного общества «Челябинский цинковый завод»
              Многофункциональный центр развития детей «Лесная застава»
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Сокращённое наименование:</dt>
            <dd>Филиал АО «ЧЦЗ» МФЦРД «Лесная застава»</dd>
          </div>
          <div>
            <dt className="font-semibold">Директор:</dt>
            <dd>Евстигнеева Тамара Сергеевна</dd>
          </div>
          <div>
            <dt className="font-semibold">Юридический адрес:</dt>
            <dd>
              454008, Челябинская область, г. Челябинск, Свердловский тракт, 24
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Фактический адрес:</dt>
            <dd>
              456518, Челябинская область, м.р-н Сосновский, с.п.
              Долгодеревенское, д. Ключевка
            </dd>
          </div>
          <div>
            <dt className="font-semibold">ОГРН:</dt>
            <dd>1027402551880</dd>
          </div>
          <div>
            <dt className="font-semibold">ИНН/КПП:</dt>
            <dd>7448000013 / 997550001</dd>
          </div>

          <div>
            <dt className="font-semibold">Режим работы:</dt>
            <dd>Круглосуточно</dd>
          </div>
          <div>
            <dt className="font-semibold">Банковские реквизиты:</dt>
            <dd>
              р/сч 40702810602940000232 в ПАО "МОСКОВСКИЙ КРЕДИТНЫЙ БАНК", Г.
              МОСКВА
            </dd>
          </div>
          <div>
            <dt className="font-semibold">БИК:</dt>
            <dd>044525659</dd>
          </div>
          <div>
            <dt className="font-semibold">к/сч:</dt>
            <dd>30101810745250000659</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
