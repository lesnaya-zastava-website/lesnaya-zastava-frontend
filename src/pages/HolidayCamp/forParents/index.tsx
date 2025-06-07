import { CardCollection } from '@/shared/ui/CardCollection';
import { CardSection } from '@/shared/ui/CardSection';

export const ForParents: React.FC = () => {
   const parents = {
    costInRub: 2000,
    dataEnum: [
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
        dataEnum: [
          'Устав лагеря'
        ],
      },
      {
        title: 'Распорядок дня',
        dataEnum: [
          'Подъем 8:00',
          'Зарядка 8:20',
          'Обед 9:00',
          'Отъбой 19:00'
        ],
      }

    ],
    dataInfo: [
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
    ],
  };

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-b border-gray-200 pb-8">
         <CardSection
          icon="[📋]"
          title="Информация для родителей"
          /*@ts-ignore*/
          Component={CardCollection}
          data={parents}
          isPositionLeft={true}
          isContainer={true}
          isLoop={false}
        />
      </div>
    </section>
  );
};
