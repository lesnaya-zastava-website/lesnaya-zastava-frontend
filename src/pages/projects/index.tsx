import { SectionCard } from '@shared/SectionCard';
import { Banner } from '@shared/banner';

export const Projects: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <Banner
          title="Дополнительные проекты"
          videoSrc="/videos/projects.mp4"
        />
        <div className="-m-2 mt-5 flex flex-wrap justify-between md:justify-start">
          <SectionCard
            title="Наши проекты"
            srcImage="/pages/about/info.jpg"
            altDesc="Картинка"
            linkTo="our"
          />
          <SectionCard
            title="Ваши проекты"
            srcImage="/pages/about/docs.jpg"
            altDesc="Картинка"
            linkTo="yours"
          />
        </div>
      </div>
    </section>
  );
};
