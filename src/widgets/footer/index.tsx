export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-primary-foreground px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="py-8">
          <h3 className="mb-8 text-2xl font-bold">Контакты</h3>

          <div className="bg-accent- grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="h-full rounded-lg border p-4 shadow-sm">
              <p className="mb-2 font-semibold">Телефон</p>
              <a
                href="tel:+89048187247"
                className="font-medium text-primary transition-colors hover:text-green-700">
                +8 (904) 818-72-47
              </a>
            </div>

            <div className="h-full rounded-lg border p-4 shadow-sm">
              <p className="mb-2 font-semibold">Дополнительный телефон</p>
              <a
                href="tel:+89049378802"
                className="font-medium text-primary transition-colors hover:text-green-700">
                +8 (904) 937-88-02
              </a>
            </div>

            <div className="h-full rounded-lg border p-4 shadow-sm">
              <p className="mb-2 font-semibold">Электронная почта</p>
              <a
                href="mailto:zastavchik@mail.ru"
                className="font-medium break-all text-primary transition-colors hover:text-green-700">
                zastavchik@mail.ru
              </a>
            </div>

            <div className="h-full rounded-lg border p-4 shadow-sm">
              <p className="mb-2 font-semibold">
                Адрес центра "Лесная Застава"
              </p>
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
           ООО «Соц-сервис». Все права защищены. (юр. лицо АО "ЧЦЗ") 
          </div>
        </div>
      </div>
    </footer>
  );
};
