import { CardCollection } from '@/shared/ui/CardCollection';

export const ForParents: React.FC = () => {
  const dataEnum = [
    {
      title: 'Документы для заезда',
      dataEnum: [
        'Свидетельство о рождении / паспорт',
        'Медицинская справка (форма 079/у)',
        'Справка об отсутствии контактов с инфекционными больными',
        'Копия полиса ОМС',
      ],
    },
    {
      title: 'Чек-лист вещей',
      dataEnum: [
        'Одежда по сезону (минимум 3 комплекта)',
        'Спортивная форма',
        'Купальные принадлежности',
        'Средства личной гигиены',
      ],
    },
    {
      title: 'Статьи для родителей',
      dataEnum: ['Устав лагеря'],
    },
    {
      title: 'Распорядок дня',
      dataEnum: ['Подъем 8:00', 'Зарядка 8:20', 'Обед 9:00', 'Отъбой 19:00'],
    },
  ];

  const dataInfo = [
    {
      title: 'Памятка заботы для родителя',
      content:
        'Рекомендации по подготовке ребенка к лагерю, советы по адаптации и поддержке.',
    },
    {
      title: 'Правила пребывания в ДОЛ',
      content:
        'Ознакомьтесь с правилами пребывания в детском оздоровительном лагере. Соблюдение этих правил обеспечит безопасность и комфорт вашего ребенка.',
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 md:flex-row">
      <div className="container mx-auto pb-8">
        <section className="flex flex-col items-center gap-8 py-16 md:flex-row">
          <div className="md:w-1/3">
            <div className="mb-4 flex items-center gap-2">
              <span className="font-mono text-gray-700">[📋]</span>
              <h2 className="text-2xl font-semibold">
                Информация для родителей
              </h2>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <CardCollection
                costInRub="2000"
                dataEnum={dataEnum}
                dataInfo={dataInfo}
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
