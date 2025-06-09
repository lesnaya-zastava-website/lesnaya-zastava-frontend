import { SectionCard } from '@shared/SectionCard';
import { Banner } from '@shared/banner';

export const About: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <Banner
            title="О центре"
            videoSrc="/videos/about.mp4"
          />
        </div>

        <div className="-m-2 mt-5 flex flex-wrap justify-between md:justify-start">
          <SectionCard
            title="Основные сведения"
            srcImage="/pages/about/info.jpg"
            altDesc="Картинка"
            linkTo="info"
          />
          <SectionCard
            title="Документы"
            srcImage="/pages/about/docs.jpg"
            altDesc="Картинка"
            linkTo="docs"
          />
          <SectionCard
            title="Наша команда"
            srcImage="/pages/about/team.png"
            altDesc="Картинка"
            linkTo="team"
          />
          <SectionCard
            title="История"
            srcImage="/pages/about/history.png"
            altDesc="Картинка"
            linkTo="history"
          />
          <SectionCard
            title="Инфраструктура"
            srcImage="/pages/about/infrastructure.png"
            altDesc="Картинка"
            linkTo="infrastructure"
          />
          <SectionCard
            title="Безопасность"
            srcImage="/pages/about/safety.jpg"
            altDesc="Картинка"
            linkTo="safety"
          />
        </div>
      </div>
    </section>
  );
};
