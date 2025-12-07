import { SectionCard } from '@/shared/ui/SectionCard';
import { Banner } from '@/shared/ui/banner';

export const About: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <Banner
            title="О центре"
            videoSrc="/videos/Main.mp4"
          />
        </div>

        <div className="-m-2 mt-5 flex flex-wrap justify-between md:justify-start">
          <SectionCard
            title="Основные сведения"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="info"
          />
          <SectionCard
            title="Документы"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="docs"
          />
          <SectionCard
            title="Наша команда"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="team"
          />
          <SectionCard
            title="История"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="history"
          />
          <SectionCard
            title="Инфраструктура"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="infrastructure"
          />
          <SectionCard
            title="Безопасность"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="safety"
          />
        </div>
      </div>
    </section>
  );
};
