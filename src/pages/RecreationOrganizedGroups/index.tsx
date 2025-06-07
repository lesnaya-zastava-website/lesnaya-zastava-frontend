import { SectionCard } from '@shared/SectionCard';
import { Banner } from '@shared/banner';

export const RecreationOrganizedGroups: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto py-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <Banner
            title="Отдых для организованных групп детей и молодежи"
            videoSrc="/videos/projects.mp4"
          />
        </div>

        <div className="-m-2 mt-5 flex flex-wrap justify-between">
          <SectionCard
            title="Стоимость услуг"
            srcImage="/pages/RecreationOrganizedGroups/services.jpg"
            altDesc="Картинка"
            linkTo="costServices"
          />
          <SectionCard
            title="Развлекательные программы"
            srcImage="/pages/RecreationOrganizedGroups/entertainments.avif"
            altDesc="Картинка"
            linkTo="entertainmentPrograms"
          />
        </div>
      </div>
    </section>
  );
};
