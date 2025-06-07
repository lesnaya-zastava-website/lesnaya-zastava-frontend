export const History: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <div className="flex flex-col gap-5">
        <p className="text-justify">
          Оздоровительный комплекс «Лесная Застава» ведет свою историю с 1959
          года. Изначально это был пионерский лагерь для сотрудников
          Челябинского цинкового завода. Прошли годы, и сегодня «Лесная
          застава»- это территория не только отдыха и оздоровления, но и
          площадка для проведения деловых, торжественных и массово-культурных
          мероприятий. Комплекс расположен в 18 км от города Челябинск на территории
          Ужовского заповедника в окружении соснового бора.
        </p>
        <img src="/pages/history/history1.png" className="lg:w-2/3 lg:mx-auto" alt="Лагерь Лесная Застава"/>
      </div>
      </div>
    </section>
  );
};
