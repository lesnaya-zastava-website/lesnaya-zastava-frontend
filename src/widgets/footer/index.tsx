export const Footer: React.FC = () => {
  return (
    <footer className=" text-gray-900 px-20">
      <div className="container mx-auto px-4 py-5 border-gray-200 border-t">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Контакты</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-700 mb-2">Адрес городского офиса</p>
                <p className="text-sm text-gray-600">454008, г. Челябинск, Свердловский тракт, 24</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Телефон</p>
                <p className="text-sm text-gray-600"><a href="tel:+73517990151">+7(351)799-01-51</a></p>
              </div>

              <div>
                <p className="font-medium text-gray-700 mb-2">Адрес комплекса "Лесная Застава"</p>
                <p className="text-sm text-gray-600">456518, Россия, Челябинская область, Сосновский р-н, п.
              Долгодеревенское, д. Ключевка ОК "Лесная застава"</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Телефон</p>
                <p className="text-sm text-gray-600"><a href="tel:+73512694916">+7(351)269-49-16</a></p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Email</p>
                <p className="text-sm text-gray-600"><a href="mailto:ok-zastawa@yandex.ru">ok-zastawa@yandex.ru</a></p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Skype</p>
                <p className="text-sm text-gray-600">okzastava</p>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Подписаться на рассылку</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Получайте последние новости и обновления</p>
              <a href="#" className="inline-block text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Подписаться на рассылку →
              </a>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Задать вопрос</h3>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Есть вопросы? Мы поможем!</p>
              <a href="#" className="inline-block text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Задать вопрос →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">ООО "Соц-сервис" Все права защищены</div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
