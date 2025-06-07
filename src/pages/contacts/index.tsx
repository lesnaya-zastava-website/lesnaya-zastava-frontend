import { PageHeading } from '@shared/PageHeading';

export const Contacts: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto py-5">
        <PageHeading>Контакты</PageHeading>
        <div className="flex w-full flex-col gap-8">
          <div className="flex flex-wrap gap-5 lg:flex-nowrap">
            <dl className="flex-1/2 gap-4 text-base">
              <div className="flex flex-col gap-2">
                <dt className="text-2xl font-semibold">Городской офис:</dt>
                <dd>454008, г. Челябинск, Свердловский тракт, 24 </dd>
                <dt className="font-semibold">Телефон/факс:</dt>
                <dd>
                  <a
                    className="font-bold text-primary"
                    href="tel:+73517990151">
                    +7 (351) 799-01-51
                  </a>{' '}
                  (По вопросам продажи путевок в детский оздоровительный лагерь)
                </dd>
              </div>
            </dl>
            <iframe
              className="flex-1/2"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa22858a8513a337f1ca3ef5f2cd83ec3462d78f65700cbe92b03acf2cdfe102c&amp;source=constructor"
              width="100%"
              height="300"
            />
          </div>
          <div className="flex flex-wrap gap-5 lg:flex-nowrap">
            <dl className="flex-1/2 gap-4 text-base">
              <div className="flex flex-col gap-2">
                <dt className="text-2xl font-semibold">
                  Загородный комплекс "Лесная Застава":
                </dt>
                <dd>
                  456518, Россия, Челябинская область, Сосновский р-н, п.
                  Долгодеревенское, д. Ключевка ОК "Лесная застава"
                </dd>
                <dt className="font-semibold">Телефоны:</dt>
                <dd>
                  <a
                    className="font-bold text-primary"
                    href="tel:+73512694916">
                    +7 (351) 269-49-16
                  </a>{' '}
                  круглосуточно
                </dd>
                <dt className="font-semibold">E-mail:</dt>
                <dd>
                  <a
                    className="font-bold text-primary"
                    href="mailto:ok-zastawa@yandex.ru">
                    ok-zastawa@yandex.ru
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
            <p>Проезд:</p>
            <p>
              <strong>Городским транспортом:</strong> от северного автовокзала
              на автобусе № 151 или № 185
            </p>
            <p>
              <strong>На личном транспорте:</strong> Для того, чтобы без труда
              найти загородный комплекс "Лесная Застава" ориентируйтесь на
              следующие указатели:
            </p>
            <p>
              1. От г. Челябинска по Свердловскому тракту до указателя на
              Аргаяш. За указателем, повернуть направо в сторону Аргаяша.
            </p>
            <img
              className="lg:w-2/3"
              src="/pages/contacts/1.png"
              alt="Дорога в лесную заставу"
            />
            <p>2. Затем необходимо проехать до указателя:</p>
            <img
              className="lg:w-2/3"
              src="/pages/contacts/2.png"
              alt="Дорога в лесную заставу"
            />
            <p>
              3. Продолжаем движение 700 м направо в сторону Аргаяша, до
              указателя "Ключевка. Лесная Застава":
            </p>
            <img
              className="lg:w-2/3"
              src="/pages/contacts/3.png"
              alt="Дорога в лесную заставу"
            />
            <p>
              4. Перед указателем свернуть налево через д. Ключевку 2 700 м до
              указателя "Лесная Застава". Никуда не сворачивать и ехать по
              главной дороге, пока слева не увидите небольшой мостик и ворота с
              надписью "Лесная Застава".
            </p>
            <img
              className="lg:w-2/3"
              src="/pages/contacts/4.jpg"
              alt="Дорога в лесную заставу"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
