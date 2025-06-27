import { RoutesCard } from '@/entities/route/ui/RoutesCard';
import { useRoute } from '@entities/route/model/useRoute';
import { PageHeading } from '@shared/PageHeading';
import { Car, Bus, Navigation } from 'lucide-react';

export const Contacts: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useRoute();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t py-5">
        <PageHeading>Контакты</PageHeading>
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-wrap gap-5 lg:flex-nowrap">
            <dl className="flex-1/2 gap-4 text-base">
              <div className="flex max-w-[440px] flex-col gap-2">
                <dt className="text-2xl font-semibold">
                  Филиал АО «ЧЦЗ» МФЦРД "Лесная Застава":
                </dt>
                <dd>
                  456518, Россия, Челябинская область, Сосновский р-н, п.
                  Долгодеревенское, д. Ключевка "Лесная застава"
                </dd>
                <dt className="font-semibold">Телефон:</dt>
                <dd>
                  <a
                    className="font-bold text-primary"
                    href="tel:+73512694916">
                    +7 (351) 269-49-16
                  </a>{' '}
                </dd>
                <dd>Добавочный 0 – Администратор (круглосуточно)</dd>
                <dd>
                  Добавочный 1 – Детский оздоровительный лагерь (в летний период
                  с 8:00 до 20:00, в остальное время с 9:00 до 17:00)
                </dd>
                <dd>
                  Добавочный 2 – По вопросам организации корпоративных заездов
                  (с 9:00 до 17:00)
                </dd>
                <dt className="font-semibold">E-mail:</dt>
                <dd>
                  <a
                    className="font-bold text-primary"
                    href="mailto:zastavchik@mail.ru">
                    zastavchik@mail.ru
                  </a>
                </dd>
              </div>
            </dl>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A9b93b7513ce3c624a75c120caaa8f308075e70d7decd1e115118d134f9d8deac&amp;source=constructor"
              width="100%"
              height="300"
              className="flex-1/2"
            />
          </div>

          <div className="flex flex-col gap-3">
            <PageHeading>Как проехать к "Лесной Заставе"</PageHeading>

            <div className="rounded-lg border p-4 shadow-sm">
              <div className="p-6 pb-4">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-primary">
                  <Navigation className="h-6 w-6" />
                  Способы проезда
                </h3>
              </div>
              <div className="space-y-6 px-6 pb-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Bus className="h-5 w-5 text-blue-600" />
                    <span className="inline-flex items-center rounded-full bg-blue-200 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      Городским транспортом
                    </span>
                  </div>
                  <p className="ml-8">
                    От северного автовокзала на автобусе № 151 или № 185
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Car className="h-5 w-5 text-primary" />
                    <span className="inline-flex items-center rounded-full bg-green-200 px-2.5 py-0.5 text-xs font-medium text-primary">
                      На личном транспорте
                    </span>
                  </div>
                  <p className="ml-8">
                    Для того, чтобы без труда найти загородный комплекс "Лесная
                    Застава" ориентируйтесь на указатели ниже.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {isLoading && <p>Загрузка...</p>}

              {isError && (
                <p className="text-red-500">
                  Ошибка при загрузке цен на услуги.
                </p>
              )}

              {!isLoading && !isError && data?.length === 0 && (
                <p className="mt-4">Цены на услуги пока что отсутствуют.</p>
              )}

              {isSuccess && data?.map((item,index)=>(<RoutesCard contactRoutes={item} index={index + 1}/>))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
