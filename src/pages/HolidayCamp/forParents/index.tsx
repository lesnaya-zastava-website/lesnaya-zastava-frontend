import type React from 'react';
import { PageHeading } from '@/shared/PageHeading';
import { Link } from 'react-router-dom';

export const ForParents: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
          <div className="space-y-6 lg:col-span-3">
            <div>
              <PageHeading>Информация для родителей</PageHeading>
              <div className="mt-6 space-y-4 leading-relaxed">
                <p className="text-lg">
                  Процесс сборов в загородный лагерь, как правило, порождает у
                  родителей множество вопросов. Особенно, если ребенок
                  отправляется на отдых впервые. Чаще всего родители переживают
                  отъезд своего чада сильнее, чем сами дети. Поэтому мы
                  представляем вашему вниманию несколько советов, которые
                  помогут подготовить ребенка к пребыванию в детском лагере и
                  понять, как лучше себя вести родителям, чтобы отдых детей был
                  полезным и незабываемым.
                </p>

                <div className="rounded-r-lg border-l-4 border-primary p-4">
                  <p className="mb-2 font-semibold text-primary">
                    Совет 1-ый: Обсуждаем отдых заранее
                  </p>
                  <p className="">
                    Ребенок должен привыкнуть к мысли, что он будет отдыхать
                    один. Для этого примерно за 2-3 месяца до предполагаемой
                    поездки начинайте с ним обсуждать отъезд в лагерь.
                  </p>
                </div>

                <div className="rounded-r-lg border-l-4 border-primary p-4">
                  <p className="mb-2 font-semibold text-primary">
                    Совет 2-ой: "Репетируем" поездку
                  </p>
                  <p className="">
                    Начинайте заблаговременно подготовку к каникулам в лагере.
                    Предложите ребенку переночевать у бабушки с дедушкой или у
                    друга.
                  </p>
                </div>

                <div className="rounded-r-lg border-l-4 border-primary p-4">
                  <p className="mb-2 font-semibold text-primary">
                    Совет 3-ий: учитываем мнение ребенка
                  </p>
                  <p className="">
                    Уважайте детское мнение. И, если ребенок не выражает желания
                    проводить каникулы в загородном лагере, не настаивайте.
                  </p>
                </div>

                <div className="rounded-r-lg border-l-4 border-primary p-4">
                  <p className="mb-2 font-semibold text-primary">
                    Совет 4-ый: проявляем такт и чуткость
                  </p>
                  <p className="">
                    Чрезмерное убеждение в необходимости поездки со стороны
                    взрослых может вызвать у ребенка впечатление, что они хотят
                    временно от него избавиться. Старайтесь быть дипломатичнее.
                  </p>
                </div>

                <div className="rounded-r-lg border-l-4 border-primary p-4">
                  <p className="mb-2 font-semibold text-primary">
                    Совет 5-ый: делимся воспоминаниями
                  </p>
                  <p className="">
                    Вспомните интересные истории из своего детства, связанные с
                    отдыхом в лагере, которые помогут увлечь ребенка.
                  </p>
                </div>
                <div className="rounded-r-lg border-l-4 border-primary p-4">
                  <p className="mb-2 font-semibold text-primary">
                    Совет 6-ой: даем ориентир для экстренных ситуаций
                  </p>
                  <p className="">
                    Расскажите ребенку, что в случае возникновения ситуации,
                    когда ему понадобится совет или помощь, он всегда может
                    позвонить родителям или обратиться к воспитателям.
                  </p>
                </div>

                <div className="rounded-r-lg border-l-4 border-primary p-4">
                  <p className="mb-2 font-semibold text-primary">
                    Совет 7-ой: держим эмоции под контролем
                  </p>
                  <p className="">
                    Во время отъезда сдерживайте свои эмоции и не выдавайте
                    волнения. Слезы мамы или бабушки могут расстроить ребенка и
                    вызвать у него еще большую грусть из-за расставания.
                  </p>
                </div>

                <div className="rounded-r-lg border-l-4 border-primary p-4">
                  <p className="mb-2 font-semibold text-primary">
                    Совет 8-ой: как реагировать на просьбы ребёнка, забрать его
                    домой?
                  </p>
                  <div className="space-y-2">
                    <p>
                      Надо расспросить ребенка о том, что именно не нравится в
                      лагере, вместе поискать решение этих проблем.
                    </p>
                    <p>
                      Важно сказать, что вы тоже скучаете, но верите, что он
                      быстро найдет новых друзей, следует настроить ребенка на
                      хороший отдых. Спросите, что понравилось сегодня, над чем
                      смеялся, что будет вечером и т.д.
                    </p>
                    <p>
                      Если чувствуете сомнения, то лучше свяжитесь с
                      администрацией лагеря и уточните состояние ребенка.
                    </p>
                    <p className="font-medium">
                      Еще один важный совет: постарайтесь общаться с ребенком по
                      телефону до 18 часов – в это время ваш ребенок увлечен
                      деятельностью и общением. Ваш звонок не вызовет грусти и
                      тоски по дому. Поздние звонки, особенно ближе к отбою,
                      напоминают ребенку об уютной обстановке дома. Ребенок
                      начинает скучать и проситься домой.
                    </p>
                  </div>
                </div>

                <div className="rounded-r-lg border-l-4 border-primary p-4">
                  <p className="mb-2 font-semibold text-primary">
                    Совет 9-ый: А если конфликт?
                  </p>
                  <p className="">
                    Если ребенок жалуется, что его бьют, дразнят и обижают или
                    возник какой-то конфликт, то вам необходимо обязательно
                    связаться с администрацией лагеря и прояснить ситуацию.
                  </p>
                </div>

                <div className="mt-6 rounded-lg border border-amber-200 p-4">
                  <p className="font-medium">
                    Помните, заблаговременная и правильная подготовка к первому
                    самостоятельному отдыху в детском лагере поможет привыкнуть
                    к мысли о нем как родителям, так и ребенку. Это первый шаг к
                    его взрослению. Поэтому важно, чтобы воспоминания по итогам
                    поездки оставались приятными, а не омрачали детское
                    сознание.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  <PageHeading>Родительское посещение</PageHeading>

                  <div className="rounded-lg border-l-4 border-red-400 p-4">
                    <p className="mb-2 font-bold text-red-700">
                      ВНИМАНИЕ! На территории лагеря действует санитарный режим.
                    </p>
                  </div>

                  <div className="rounded-lg p-6">
                    <h4 className="mb-4 text-xl font-semibold text-red-700">
                      КАТЕГОРИЧЕСКИ ЗАПРЕЩАЕТСЯ передавать детям:
                    </h4>

                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                        <span>
                          скоропортящиеся продукты и напитки, вяленую рыбу,
                          колбасу, кондитерские изделия с кремовой начинкой,
                          газированные напитки, чипсы, сухарики, макаронные
                          изделия быстрого приготовления, жевательные резинки;
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                        <span>
                          лекарственные препараты для самостоятельного
                          применения (в случае необходимости регулярного
                          применения лекарственных средств необходима встреча
                          родителей с главным врачом лагеря);
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                        <span>
                          крупные электрические приборы (чайники, кипятильники,
                          утюги, а так же удлинители);
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                        <span>
                          острые предметы и перочинные ножи, взрывоопасные и
                          пожароопасные вещества (петарды, бенгальские огни и
                          т.д.);
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-red-500"></span>
                        <span>
                          крупные суммы денег и дорогие вещи (украшения из
                          драгоценных металлов, дорогие мобильные телефоны,
                          электронику и т.д.).
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border-l-4 border-orange-400 p-4">
                    <p className="mb-2 font-bold text-orange-500">ВНИМАНИЕ!</p>
                    <p className="">
                      Администрация и педагоги ДОЛ «Лесная Застава» НЕ НЕСУТ
                      ответственности за деньги и материальные ценности,
                      привезенные детьми в лагерь.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-50">
              <PageHeading>Навигация</PageHeading>
              <nav>
                <ul className="space-y-3">
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                      to="parent-things"
                      className="block rounded-md border border-transparent p-3 text-sm font-medium transition-colors duration-200 hover:text-primary">
                      Список необходимых вещей
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                      to="parent-documents"
                      className="block rounded-md border border-transparent p-3 text-sm font-medium transition-colors duration-200 hover:text-primary">
                      Список необходимых документов
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                      to="parent-rules"
                      className="block rounded-md border border-transparent p-3 text-sm font-medium transition-colors duration-200 hover:text-primary">
                      Правила пребывания в ДОЛ "Лесная застава"
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
