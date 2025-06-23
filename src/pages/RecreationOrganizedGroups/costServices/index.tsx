import { useServicePrices } from '@/entities/service/model/useServicePrices';
import { ServicePriceCard } from '@/entities/service/ui/ServicePriceCard';
import { PageHeading } from '@/shared/PageHeading';

export const CostServices: React.FC = () => {
  const { data, isError, isLoading, isSuccess } = useServicePrices();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto pb-8">
        <section className="flex flex-col gap-8 py-16">
          <PageHeading>Стоимость услуг</PageHeading>

          {isLoading && <p>Загрузка...</p>}

          {isError && (
            <p className="text-red-500">Ошибка при загрузке цен на услуги.</p>
          )}

          {!isLoading && !isError && data?.length === 0 && (
            <p className="mt-4">Цены на услуги пока что отсутствуют.</p>
          )}

          <div className="grid grid-cols-1 gap-6">
            {isSuccess &&
              data?.map(item => <ServicePriceCard servicePrice={item} />)}
          </div>
        </section>
      </div>
    </section>
  );
};
