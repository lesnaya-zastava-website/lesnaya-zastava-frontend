import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="px-20 text-gray-900">
      <div className="mx-auto border-t border-gray-200 px-4 py-5 ">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="flex-1 space-y-4">
            <h3 className="mb-4 text-xl font-semibold text-gray-700">
              Контакты
            </h3>
            <div className="space-y-3">
              <div>
                <p className="mb-2 font-medium text-gray-700">
                  Адрес городского офиса
                </p>
                <address className="text-sm text-gray-600">
                  454008, г. Челябинск, Свердловский тракт, 24
                </address>
              </div>
              <div>
                <p className="mb-2 font-medium text-gray-700">Телефон</p>
                <p className="text-sm text-gray-600">
                  <Link to="tel:+73517990151">+7(351)799-01-51</Link>
                </p>
              </div>

              <div>
                <p className="mb-2 font-medium text-gray-700">
                  Адрес комплекса "Лесная Застава"
                </p>
                <address className="text-sm text-gray-600">
                  456518, Россия, Челябинская область, Сосновский р-н, п.
                  Долгодеревенское, д. Ключевка ОК "Лесная застава"
                </address>
              </div>
              <div>
                <p className="mb-2 font-medium text-gray-700">Телефон</p>
                <p className="text-sm text-gray-600">
                  <Link to="tel:+73512694916">+7(351)269-49-16</Link>
                </p>
              </div>
              <div>
                <p className="mb-2 font-medium text-gray-700">Email</p>
                <p className="text-sm text-gray-600">
                  <Link to="mailto:ok-zastawa@yandex.ru">
                    ok-zastawa@yandex.ru
                  </Link>
                </p>
              </div>
              <div>
                <p className="mb-2 font-medium text-gray-700">Skype</p>
                <p className="text-sm text-gray-600">okzastava</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="mb-4 text-xl font-semibold text-gray-700">
              Подписаться на рассылку
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Получайте последние новости и обновления
              </p>
              <Link
                to="#"
                className="inline-block font-medium text-gray-700 transition-colors hover:text-gray-900">
                Подписаться на рассылку →
              </Link>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="mb-4 text-xl font-semibold text-gray-700">
              Задать вопрос
            </h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Есть вопросы? Мы поможем!</p>
              <Link
                to="#"
                className="inline-block font-medium text-gray-700 transition-colors hover:text-gray-900">
                Задать вопрос →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-gray-600">
              ООО "Соц-сервис" Все права защищены
            </div>
            <div className="flex space-x-6">
              <Link
                to="#"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                Политика конфиденциальности
              </Link>
              <Link
                to="#"
                className="text-sm text-gray-600 transition-colors hover:text-gray-900">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
