export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-primary-foreground px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="py-8">
          <h3 className="mb-8 text-2xl font-bold">Контакты</h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="h-full rounded-lg border p-4 shadow-sm">
              <p className="mb-2 font-semibold">Телефон</p>
              <a
                href="tel:+73517990151"
                className="font-medium text-primary transition-colors hover:text-green-700">
                +8 (351) 799-01-51
              </a>
            </div>

            <div className="h-full rounded-lg border p-4 shadow-sm">
              <p className="mb-2 font-semibold">Дополнительный телефон</p>
              <a
                href="tel:+73512694916"
                className="font-medium text-primary transition-colors hover:text-green-700">
                +7 (351) 269-49-16
              </a>
            </div>

            <div className="h-full rounded-lg border p-4 shadow-sm">
              <p className="mb-2 font-semibold">Электронная почта</p>
              <a
                href="mailto:ok-zastawa@yandex.ru"
                className="font-medium break-all text-primary transition-colors hover:text-green-700">
                ok-zastawa@yandex.ru
              </a>
            </div>

            <div className="h-full rounded-lg border p-4 shadow-sm">
              <p className="mb-2 font-semibold">Городской офис</p>
              <p className="text-sm leading-relaxed">
                454008, г. Челябинск,
                <br />
                Свердловский тракт, 24
              </p>
            </div>

            <div className="h-full rounded-lg border p-4 shadow-sm">
              <p className="mb-2 font-semibold">Комплекс "Лесная Застава"</p>
              <p className="text-sm leading-relaxed">
                456518, Россия, Челябинская область, Сосновский р-н, п.
                Долгодеревенское, д. Ключевка ОК "Лесная застава"
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="container mx-auto border-t py-5 text-center">
          <div className="text-center text-sm">
            АО "ЧЦЗ". Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};
