import { useYourProjectsPhoto } from '@/entities/projects/yourProjects/photos/model/useYourProjectsPhoto';
import { useYourProjectsText } from '@/entities/projects/yourProjects/text/model/useYourProjectsText';
import { YourProjectsTextParagraph } from '@/entities/projects/yourProjects/text/ui/YourProjectsTextParagraph';
import { GallerySlider } from '@/features/GallerySlider';
import { PageHeading } from '@/shared/PageHeading';

export const Yours: React.FC = () => {
  const { data, isSuccess, isLoading, isError } = useYourProjectsText();

  const {
    data: dataPhotos,
    isSuccess: isSuccessPhotos,
    isLoading: isLoadingPhotos,
    isError: isErrorPhotos,
  } = useYourProjectsPhoto();
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Ваши проекты</PageHeading>
        <div className="mb-4 flex flex-col gap-3">
          {isLoading && <p>Загрузка...</p>}

          {isError && <p className="text-red-500">Ошибка при загрузке.</p>}

          {!isLoading && !isError && data?.length === 0 && (
            <p className="mt-4">Описание отсутствует.</p>
          )}
          {isSuccess &&
            data?.map(item => <YourProjectsTextParagraph textItem={item} />)}
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <PageHeading>Отчёты с прошедших мероприятий</PageHeading>
          <p className="text-justify">
            Мы гордимся каждым мероприятием, которое прошло в лагере, и с
            радостью делимся отчетами и фотографиями. Здесь вы можете увидеть,
            как проходят наши праздники, концерты и спортивные состязания.
          </p>

          {isLoadingPhotos && <p>Загрузка...</p>}

          {isErrorPhotos && (
            <p className="text-red-500">Ошибка при загрузке галереи</p>
          )}

          {!isLoadingPhotos && !isErrorPhotos && dataPhotos?.length === 0 && (
            <p className="mt-4">Фотографий пока нет.</p>
          )}

          {isSuccessPhotos && (
            <GallerySlider
              items={dataPhotos?.flatMap(item => item.photo)}
              getPhoto={photo => photo}
            />
          )}
        </div>
      </div>
    </section>
  );
};
