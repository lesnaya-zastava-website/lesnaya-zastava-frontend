export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-primary-foreground px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto">
        <div className="py-8">
          <h3 className="mb-8 text-2xl font-bold">Контакты</h3>

          <div className="bg-accent- grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex h-full flex-col rounded-lg border p-4 shadow-sm">
              <a
                href="tel:+89048187247"
                className="font-medium text-primary transition-colors hover:underline">
                +8 (904) 818-72-47
              </a>
              <a
                href="tel:+89049378802"
                className="font-medium text-primary transition-colors hover:underline">
                +8 (904) 937-88-02
              </a>
            </div>

            <div className="h-full rounded-lg border p-4 shadow-sm">
              <a
                href="https://yandex.ru/maps/-/CHcLVYnh"
                target="_blank"
                className="flex items-center space-x-1 hover:underline">
                456518, Россия, Челябинская область, Сосновский р-н, п.
                Долгодеревенское, д. Ключевка, "Лесная застава"
              </a>
              <a
                href="https://yandex.ru/maps/-/CLw7IF-f"
                target="_blank"
                className="flex items-center space-x-1 hover:underline">
                Солнечная поляна д.8
              </a>
            </div>
            <div className="h-full rounded-lg border p-4 shadow-sm">
              <a
                href="mailto:zastavchik@mail.ru"
                className="font-medium break-all text-primary transition-colors hover:underline">
                zastavchik@mail.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
