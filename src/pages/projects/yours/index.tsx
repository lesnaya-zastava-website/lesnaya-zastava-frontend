import { useYourProjectsPhoto } from '@/entities/projects/yourProjects/photos/model/useYourProjectsPhoto';
import { useYourProjectsText } from '@/entities/projects/yourProjects/text/model/useYourProjectsText';
import { PhotoGallery } from '@/shared/ui/PhotoGallery';
import { PageHeading } from '@/shared/ui/PageHeading';
import { Loader } from '@/shared/ui/components/ui/loader';
import { processCkeditorHtml } from '@/lib/utils';

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

        <div className="mb-4 flex flex-col gap-3">
          {isLoading && <Loader />}
          {isError && <p className="text-red-500">Ошибка при загрузке.</p>}

          {!isLoading && !isError && data?.length === 0 && (
            <p className="mt-4">Описание отсутствует.</p>
          )}

          {isSuccess &&
            data?.map(item => (
              <div
                key={item.id}
                className="styled-html-content"
                dangerouslySetInnerHTML={{ __html: processCkeditorHtml(item.textHtml) }}
              />
            ))}
        </div>

        <div className="mb-4 flex flex-col gap-3">
          <PageHeading>Отчёты с прошедших мероприятий</PageHeading>

          <p className="text-justify">
            Мы гордимся каждым мероприятием, которое прошло в лагере, и с
            радостью делимся отчетами и фотографиями.
          </p>

          {isLoadingPhotos && <Loader />}
          {isErrorPhotos && (
            <p className="text-red-500">Ошибка при загрузке галереи</p>
          )}
          {!isLoadingPhotos && !isErrorPhotos && dataPhotos?.length === 0 && (
            <p className="mt-4">Фотографий пока нет.</p>
          )}

          {isSuccessPhotos && (
            <PhotoGallery
              photos={
                dataPhotos?.flatMap(item =>
                  item.photo.map(p => ({
                    url: p.url,
                    name: p.name,
                  }))
                ) || []
              }
            />
          )}
        </div>
      </div>
    </section>
  );
};
