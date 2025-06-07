import { PageHeading } from '@/shared/PageHeading';
import MapInteractive from '@features/MapInteractive/ui';

export const Infrastructure: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto py-5">
        <PageHeading>Инфраструктура</PageHeading>
        <MapInteractive />
        <PageHeading>Фото территории</PageHeading>
      </div>
    </section>
  );
};
