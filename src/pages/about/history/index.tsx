import { useHistoryPhotos } from '@/entities/history/model/useHistoryPhotos';
import { GallerySlider } from '@/features/GallerySlider';
import { PageHeading } from '@/shared/PageHeading';

export const History: React.FC = () => {
  const { data, isSuccess, isLoading, isError } = useHistoryPhotos();
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>История</PageHeading>
        <div className="flex flex-col gap-5">
          <p className="text-justify">
            Оздоровительный комплекс «Лесная Застава» ведет свою историю с 1959
            года. Изначально это был пионерский лагерь для сотрудников
            Челябинского цинкового завода. Прошли годы, и сегодня «Лесная
            застава»- это территория не только отдыха и оздоровления, но и
            площадка для проведения деловых, торжественных и массово-культурных
            мероприятий. Комплекс расположен в 18 км от города Челябинск на
            территории Ужовского заповедника в окружении соснового бора.
          </p>
          {isLoading && <p>Загрузка...</p>}

          {isError && <p className="text-red-500">Ошибка при загрузке.</p>}

          {!isLoading && !isError && data?.length === 0 && (
            <p className="mt-4">Описание отсутствует.</p>
          )}

          {isSuccess && (
            <GallerySlider
              items={data?.flatMap(item => item.photo)}
              getPhoto={photo => photo}
            />
          )}
        </div>
      </div>
    </section>
  );
};
