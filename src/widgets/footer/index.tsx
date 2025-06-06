import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="max-w-[285px] flex-1 space-y-4">
            <h3 className="mb-4 text-xl font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 font-medium">Адрес городского офиса</p>
                <p className="text-sm">
                  454008, г. Челябинск, Свердловский тракт, 24
                </p>
              </div>
              <div>
                <p className="mb-2 font-medium">Телефон</p>
                <p className="text-sm">
                  <a href="tel:+73517990151">+7(351)799-01-51</a>
                </p>
              </div>
              <div>
                <p className="mb-2 font-medium">
                  Адрес комплекса "Лесная Застава"
                </p>
                <p className="text-sm">
                  456518, Россия, Челябинская область, Сосновский р-н, п.
                  Долгодеревенское, д. Ключевка ОК "Лесная застава"
                </p>
              </div>
              <div>
                <p className="mb-2 font-medium">Телефон</p>
                <p className="text-sm">
                  <a href="tel:+73512694916">+7(351)269-49-16</a>
                </p>
              </div>
              <div>
                <p className="mb-2 font-medium">Email</p>
                <p className="text-sm">
                  <a href="mailto:ok-zastawa@yandex.ru">ok-zastawa@yandex.ru</a>
                </p>
              </div>
              <div>
                <p className="mb-2 font-medium">Skype</p>
                <p className="text-sm">okzastava</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="mb-4 text-xl font-semibold">
              Подписаться на рассылку
            </h3>
            <div className="space-y-3">
              <p className="text-sm">
                Получайте последние новости и обновления
              </p>
              <a
                href="#"
                className="inline-block font-medium transition-colors">
                Подписаться на рассылку →
              </a>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="mb-4 text-xl font-semibold">Задать вопрос</h3>
            <div className="space-y-3">
              <p className="text-sm">Есть вопросы? Мы поможем!</p>
              <a
                href="#"
                className="inline-block font-medium transition-colors">
                Задать вопрос →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="container mx-auto border-t border-gray-200 py-5 text-center">
            <div className="flex flex-col items-center justify-between gap-2 space-y-4 md:flex-row md:space-y-0">
              <div className="text-sm">ООО "Соц-сервис" Все права защищены</div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="text-sm transition-colors">
                  Политика конфиденциальности
                </a>
                <a
                  href="#"
                  className="text-sm transition-colors">
                  Условия использования
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
