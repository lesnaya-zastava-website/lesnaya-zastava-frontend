import { SectionCard } from '@shared/SectionCard';
import { Banner } from '@shared/banner';

export const HolidayCamp: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto py-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <Banner
            title="Детский отдых в каникулярное время"
            videoSrc="/videos/HolidayCamp.mp4"
          />
        </div>

        <div className="-m-2 mt-5 flex flex-wrap justify-between">
          <SectionCard
            title="Ближайшие смены"
            srcImage="/pages/about/info.jpg"
            altDesc="Картинка"
            linkTo="announcements"
          />
          <SectionCard
            title="Педагогический состав"
            srcImage="/pages/about/team.png"
            altDesc="Картинка"
            linkTo="teachingStaff"
          />
          <SectionCard
            title="Материально - техническая база"
            srcImage="/pages/about/docs.jpg"
            altDesc="Картинка"
            linkTo="technicalBase"
          />
          <SectionCard
            title="Информация для родителей"
            srcImage="/pages/HolidayCamp/important.jpg"
            altDesc="Картинка"
            linkTo="forParents"
          />
          <SectionCard
            title="Медиа-центр лагеря"
            srcImage="/pages/HolidayCamp/media.jpg"
            altDesc="Картинка"
            linkTo="mediaCenter"
          />
          <SectionCard
            title="Условия проживания и инфраструктура"
            srcImage="/pages/HolidayCamp/planCamp.png"
            altDesc="Картинка"
            linkTo="/about/infrastructure"
          />
        </div>
      </div>
    </section>
  );
};
