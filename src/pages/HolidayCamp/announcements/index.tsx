import { PageHeading } from '@/shared/PageHeading';
import { CardAnnouncement } from '@/shared/ui/CardAnnouncement';
import { useAnnouncement } from '@/entities/announcement/model/useAnnouncement';
import { GallerySlider } from '@/features/GallerySlider';

export const Announcements: React.FC = () => {
  const {
    data: AnnouncementResponse,
    isLoading,
    isError,
    isSuccess,
  } = useAnnouncement();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <section className="flex flex-col flex-wrap gap-8 py-16">
          <PageHeading>Анонсы и актуальные смены</PageHeading>

          {isLoading && <p>Загрузка...</p>}

          {isError && <p className="text-red-500">Ошибка при загрузке...</p>}

          {!isLoading && !isError && AnnouncementResponse?.length === 0 && (
            <p className="mt-4">Список анонсов отсутствует.</p>
          )}

          <div className="w-full">
            <div className="grid grid-cols-2 gap-6">
              {AnnouncementResponse?.map((items, index) => (
                <CardAnnouncement
                  key={index}
                  {...items}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
