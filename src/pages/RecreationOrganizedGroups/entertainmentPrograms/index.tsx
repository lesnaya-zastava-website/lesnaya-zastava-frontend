import { useEntertainmentPrice } from '@/entities/entertainmentPrograms/price/model/useEntertainmentPrice';
import { EntertainmentPriceCard } from '@/entities/entertainmentPrograms/price/ui/EntertainmentPriceCard';
import { PageHeading } from '@/shared/PageHeading';

export const EntertainmentPrograms: React.FC = () => {
  const { data, isLoading, isError, isSuccess } = useEntertainmentPrice();
  console.log(data);

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto pb-8">
        <section className="flex flex-col gap-8 py-16">
          <PageHeading>
            Прайс развлекательных программ и дополнительных услуг
          </PageHeading>

          {isLoading && <p>Загрузка...</p>}

          {isError && (
            <p className="text-red-500">Ошибка при загрузке цен на услуги.</p>
          )}

          {!isLoading && !isError && data?.length === 0 && (
            <p className="mt-4">Цены на услуги пока что отсутствуют.</p>
          )}

          <div className="flex flex-col gap-6">
            {isSuccess &&
              data?.map(item => (
                <EntertainmentPriceCard entertainmentPrice={item} />
              ))}
          </div>
        </section>

        <section className="flex flex-col gap-8 py-16">
          <PageHeading>Актуальные предложения</PageHeading>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* {announcement.map((items, index) => (
              <CardAnnouncement
                key={index}
                {...items}
              />
            ))} */}
          </div>
        </section>
      </div>
    </section>
  );
};
