export const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex items-top justify-between w-full px-20 pt-20">
        
        <div className="w-65">
          <img src="./tempLogo.png" alt="logo" />

          <p className="text-xs text-gray-500">
            ООО "Сил-Сервис" Все права защищены
          </p>
        </div>

        <div>
          <button>Подписаться на рассылку</button>
        </div>

        <div>
          <a>Задать вопрос</a>
        </div>

        <div className='w-1/3'>
          <p>Контакты</p>

          <div>
            <p>Городской офис</p>
            <p>454008, г. Челябинск, Свердловский тракт, 24 </p>
            <p>Телефон/факс: <a href="tel:+73517990151">+7(351)799-01-51</a></p>
          </div>

          <div>
            <p>Загородный комплекс "Лесная Застава":</p>
            <p>
              456518, Россия, Челябинская область, Сосновский р-н, п.
              Долгодеревенское, д. Ключевка ОК "Лесная застава"
            </p>
            <p>Телефон/факс: <a href="tel:+73512694916">+7(351)269-49-16</a></p>
            <p>Email: ok-zastawa@yandex.ru</p>
            <p>Skype: okzastava</p>
          </div>
        </div>
      </footer>
    </>
  );
};
