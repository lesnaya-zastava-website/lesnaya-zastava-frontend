import { useSafetyDocuments } from '@/entities/document/model/useSafetyDocuments';
import { DocumentCard } from '@/entities/document/ui';
import { useSafetyGallery } from '@/entities/gallery/model/useSafetyGallery';
import { useSafetyText } from '@/entities/safety/text/model/useSafetyText';
import { GallerySlider } from '@/features/GallerySlider';
import { PageHeading } from '@/shared/ui/PageHeading';

export const Safety: React.FC = () => {
  const { data, isLoading, isError, isSuccess } = useSafetyDocuments();

  const {
    data: dataText,
    isLoading: isLoadingText,
    isError: isErrorText,
    isSuccess: isSuccessText,
  } = useSafetyText();

  const {
    data: dataGallery,
    isLoading: isLoadingGallery,
    isError: isErrorGallery,
    isSuccess: isSuccessGallery,
  } = useSafetyGallery();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Актуальные документы о безопасности</PageHeading>
        {isLoading && <p>Загрузка...</p>}

        {isError && (
          <p className="text-red-500">Ошибка при загрузке документов</p>
        )}

        {!isLoading && !isError && data?.length === 0 && (
          <p className="mt-4">Документов пока нет.</p>
        )}

        {isSuccess && (
          <div className="mt-6">
            {data?.map(doc => (
              <DocumentCard
                key={doc.id}
                document={doc}
              />
            ))}
          </div>
        )}

        <div className="mb-4 flex flex-col gap-3">
          {isLoadingText && <p>Загрузка...</p>}

          {isErrorText && (
            <p className="text-red-500">Ошибка при загрузке текста</p>
          )}

          {!isLoadingText && !isErrorText && dataText?.length === 0 && (
            <p className="mt-4">Текст отсутствует.</p>
          )}

          {isSuccessText &&
            dataText?.map(item => (
              <div
                key={item.id}
                className="styled-html-content"
                dangerouslySetInnerHTML={{ __html: item.textHtml }}
              />
            ))}
        </div>

        {isLoadingGallery && <p>Загрузка...</p>}

        {isErrorGallery && (
          <p className="text-red-500">Ошибка при загрузке галереи</p>
        )}

        {!isLoadingGallery && !isErrorGallery && dataGallery?.length === 0 && (
          <p className="mt-4">Фотографий пока нет.</p>
        )}

        {isSuccessGallery && (
          <GallerySlider
            items={dataGallery?.flatMap(item => item.photo)}
            getPhoto={photo => photo}
          />
        )}
      </div>
    </section>
  );
};
