import { SectionCard } from '@shared/SectionCard';
import { Banner } from '@shared/banner';

export const HolidayCamp: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t py-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <Banner
            title="Детский отдых"
            videoSrc="/videos/HolidayCamp.mp4"
          />
        </div>

        <div className="-m-2 mt-5 flex flex-wrap justify-between">
          <SectionCard
            title="Анонсы и актуальные смены"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="announcements"
          />
          <SectionCard
            title="Педагогический состав"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="teachingStaff"
          />
          <SectionCard
            title="Материально - техническая база"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="technicalBase"
          />
          <SectionCard
            title="Информация для родителей"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="forParents"
          />
          <SectionCard
            title="Медиа-центр лагеря"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="mediaCenter"
          />
          <SectionCard
            title="Условия проживания и инфраструктура"
            srcImage="/bgCard.png"
            altDesc="Картинка"
            linkTo="/about/infrastructure"
          />
        </div>
      </div>
    </section>
  );
};
