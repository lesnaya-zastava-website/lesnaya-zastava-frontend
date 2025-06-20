export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-4 py-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto py-2">
        <div className="">
          {/* Основная секция контактов */}
          <div>
            <h3 className="mb-8 text-2xl font-bold text-gray-900">Контакты</h3>

            {/* Сетка контактов */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Телефоны */}

              <div className="h-full rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <p className="mb-2 font-semibold text-gray-900">
                  Телефон для связи
                </p>
                <a
                  href="tel:+73517990151"
                  className="font-medium text-primary transition-colors hover:text-green-700">
                  +8 (351) 799-01-51
                </a>
              </div>

              <div className="h-full rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <p className="mb-2 font-semibold text-gray-900">
                  Дополнительный телефон
                </p>
                <a
                  href="tel:+73512694916"
                  className="font-medium text-primary transition-colors hover:text-green-700">
                  +7 (351) 269-49-16
                </a>
              </div>

              {/* Email */}

              <div className="h-fit h-full rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <p className="mb-2 font-semibold text-gray-900">
                  Электронная почта
                </p>
                <a
                  href="mailto:ok-zastawa@yandex.ru"
                  className="font-medium break-all text-primary transition-colors hover:text-green-700">
                  ok-zastawa@yandex.ru
                </a>
              </div>

              {/* Адреса */}

              <div className="h-full rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <p className="mb-2 font-semibold text-gray-900">
                  Городской офис
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  454008, г. Челябинск,
                  <br />
                  Свердловский тракт, 24
                </p>
              </div>

              <div className="h-full rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <p className="mb-2 font-semibold text-gray-900">
                  Комплекс "Лесная Застава"
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  456518, Россия, Челябинская область, Сосновский р-н, п.
                  Долгодеревенское, д. Ключевка ОК "Лесная застава"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя секция с копирайтом */}
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
