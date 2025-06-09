import { PageHeading } from '@/shared/PageHeading';

export const Yours: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Ваши проекты</PageHeading>
        <div className="mb-4 flex flex-col gap-3">
          <p className="text-justify">
            Наш лагерь активно занимается организацией ярких и запоминающихся
            мероприятий для детей и подростков. Мы стремимся создать атмосферу
            творчества, дружбы и командной работы.
          </p>
          <p className="text-justify">
            Программа мероприятий включает тематические вечера, интеллектуальные
            игры, спортивные соревнования, творческие мастер-классы и
            театральные постановки. Мы верим, что каждое мероприятие помогает
            детям раскрыть свои таланты, учиться новому и просто весело провести
            время в кругу сверстников.
          </p>
        </div>

        <div className="mb-4 flex flex-col gap-3">
          <PageHeading>Прайс на услуги</PageHeading>
          <p className="text-justify">
            Мы предлагаем дополнительные услуги, направленные на развитие и
            развлечения детей во время отдыха. Ниже представлены ориентировочные
            цены на организацию мероприятий и мастер-классов.
          </p>
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <PageHeading>Отчёты с прошедших мероприятий</PageHeading>
          <p className="text-justify">
            Мы гордимся каждым мероприятием, которое прошло в лагере, и с
            радостью делимся отчетами и фотографиями. Здесь вы можете увидеть,
            как проходят наши праздники, концерты и спортивные состязания.
          </p>
        </div>
      </div>
    </section>
  );
};
