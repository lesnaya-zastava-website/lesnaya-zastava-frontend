export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto p-5 sm:px-7 md:px-10 lg:px-30">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="flex-1 space-y-4">
            <h3 className="mb-4 text-xl font-semibold">Контакты</h3>
            <div className="flex flex-col justify-between gap-6 lg:flex-wrap lg:flex-row">
              <div className="max-w-[300px]">
                <p className="mb-2 font-medium">Телефон</p>
                <p className="text-sm">
                  <a href="tel:+73517990151">+8(351)799-01-51</a>
                </p>
              </div>

              <div className="max-w-[300px]">
                <p className="mb-2 font-medium">Телефон</p>
                <p className="text-sm">
                  <a href="tel:+73512694916">+7(351)269-49-16</a>
                </p>
              </div>
              <div className="max-w-[300px]">
                <p className="mb-2 font-medium">Email</p>
                <p className="text-sm">
                  <a href="mailto:ok-zastawa@yandex.ru">ok-zastawa@yandex.ru</a>
                </p>
              </div>
              <div className="max-w-[300px]">
                <p className="mb-2 font-medium">
                  Адрес комплекса "Лесная Застава"
                </p>
                <p className="text-sm">
                  456518, Россия, Челябинская область, Сосновский р-н, п.
                  Долгодеревенское, д. Ключевка ОК "Лесная застава"
                </p>
              </div>
              <div className="max-w-[300px]">
                <p className="mb-2 font-medium">Адрес городского офиса</p>
                <p className="text-sm">
                  454008, г. Челябинск, Свердловский тракт, 24
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="container mx-auto border-t border-gray-200 py-5 text-center">
          <div className="text-center text-sm">
            ООО "Соц-сервис" Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};
