import type React from 'react';
import { PageHeading } from '@/shared/PageHeading';

export const ParentRules: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-border py-8">
        <PageHeading>Правила пребывания в ДОЛ "Лесная застава"</PageHeading>

        <div className="mt-6">
          <div className="leading-relaxed">
            {/* 1. Общие положения */}
            <div className="mb-6 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 border-b border-border pb-2 text-xl font-bold text-foreground">
                1. Общие положения
              </h3>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    1.1.{' '}
                  </strong>
                  Настоящие Правила определяют порядок пребывания ребенка в
                  детском оздоровительном лагере «Лесная застава» (далее
                  Лагерь), а также права и обязанности Лагеря (СанПиН
                  2.4.4.3155-13 «Общие требования к устройству, содержанию и
                  организации режима работы загородных стационарных учреждений
                  отдыха и оздоровления детей») в отношении ребенка и родителя
                  (законного представителя) на период пребывания на территории
                  Лагеря (срока действия путевки), и распространяются на всех
                  детей, находящихся на оздоровительном отдыхе в Лагере.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    1.2.{' '}
                  </strong>
                  В Лагерь принимаются дети, не имеющие медицинских
                  противопоказаний, готовые к самообслуживанию в возрасте от 6
                  до 14 лет включительно (заезд 15 летних подростков разрешается
                  только 4 смену).
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    1.3.{' '}
                  </strong>
                  Прием детей в Лагерь производится путем личной передачи
                  ребенка от родителей (законного представителя) представителю
                  Лагеря на регистрации при посадке в автобусы. Родители или
                  ответственное лицо с ребёнком должны прибыть к месту отправки
                  автобуса (г. Челябинск, ул. автовокзал Северные ворота, 1Н) не
                  менее чем за 30 минут до отправления, сдать необходимые
                  документы и отметить ребёнка в списке детей (у отрядного
                  воспитателя).
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    1.4.{' '}
                  </strong>
                  Прием детей в Лагерь производится на основании следующих
                  документов, которые предъявляются родителем (законным
                  представителем) перед заездом на регистрации:
                </p>
                <ul className="ml-4">
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span className="font-medium">заполненная путёвка;</span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span className="font-medium">
                      подписанные правила пребывания в лагере;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span className="font-medium">
                      медицинская справка формы 079/у;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span className="font-medium">
                      копия сертификата о прививках;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span className="font-medium">
                      копия свидетельства о рождении (до 14 лет) и паспорта (с
                      14 лет);
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span className="font-medium">
                      справка об отсутствии контакта с инфекционными больными
                      (действует 3 дня);
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span className="font-medium">
                      справка для посещения ребёнком бассейна с отметкой врача.
                      Включает сдачу кала на яйца глистов и соскоба на яйца
                      остриц.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    1.5.{' '}
                  </strong>
                  Жизнь и здоровье детей на период пребывания в лагере
                  застрахована (тел. для получения информации при наступлении
                  страхового случая 799-01-51).
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    1.6.{' '}
                  </strong>
                  Каждый ребенок должен осознавать, что он едет в детский
                  коллектив и должен придерживаться правил, установленных в этом
                  коллективе. Приезд ребенка в лагерь считается согласием
                  ребенка и его родителей на выполнение правил, установленных в
                  Лагере.
                </p>
              </div>
            </div>

            {/* 2. Правила подготовки ребенка к Лагерю */}
            <div className="mb-6 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 border-b border-border pb-2 text-xl font-bold text-foreground">
                2. Правила подготовки ребенка к Лагерю
              </h3>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    2.1.{' '}
                  </strong>
                  Каждый родитель должен подготовить своего ребенка к поездке в
                  Лагерь: ознакомить его с Правилами пребывания ребенка в
                  Лагере, проверить его личные одежду и вещи.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    2.2.{' '}
                  </strong>
                  Вещи ребёнка должны быть упакованы в один удобный для
                  транспортировки чемодан или сумку. Перед отправлением родители
                  должны ознакомить ребёнка с содержанием багажа, при
                  необходимости положить письменный перечень вещей. Вещи должны
                  быть подписаны.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    2.3.{' '}
                  </strong>
                  Пожалуйста, не давайте ребёнку в Лагерь дорогие ювелирные
                  изделия, дорогую косметику, дорогую одежду, ценные вещи,
                  деньги, электронные игры, аудио-видеотехнику и дорогие
                  мобильные телефоны.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    2.4.{' '}
                  </strong>
                  Родитель должен настроить ребенка на активный отдых в детском
                  коллективе.
                </p>
              </div>
            </div>

            {/* 3. Правила пребывания в лагере */}
            <div className="mb-6 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 border-b border-border pb-2 text-xl font-bold text-foreground">
                3. Правила пребывания в лагере
              </h3>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.1.{' '}
                  </strong>
                  По приезду в Лагерь дети распределяют по отрядам с учетом
                  возраста.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.2.{' '}
                  </strong>
                  Каждый ребенок обязан пройти инструктаж по технике
                  безопасности, расписаться в журнале инструктажа и соблюдать
                  все установленные в Лагере правила, в т.ч. правила
                  противопожарной безопасности, правила проведения купаний,
                  экскурсий, походов и т.д.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.3.{' '}
                  </strong>
                  Необходимо знать план эвакуации спального корпуса. В случае
                  обнаружения признаков возгорания незамедлительно покинуть
                  здание и сообщить любому взрослому.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.4.{' '}
                  </strong>
                  Каждый ребенок должен соблюдать режим дня Лагеря, общие
                  санитарно- гигиенические нормы, личную гигиену (умываться,
                  причесываться, принимать душ, одеваться по погоде и т.д.).
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.5.{' '}
                  </strong>
                  Ребенок должен находиться вместе с отрядом и участвовать в
                  жизни коллектива лагеря. Ребенок может не участвовать в
                  каких-либо мероприятиях по объективным причинам (болезнь и
                  т.п.), но должен предупредить воспитателя о месте своего
                  нахождения.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.6.{' '}
                  </strong>
                  Выход за территорию Лагеря категорически запрещен. Допускаются
                  выходы отрядов с разрешения зам. управляющего по
                  воспитательной работе для проведения мероприятий (походы,
                  экскурсии, костры) в сопровождении воспитателя.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.7.{' '}
                  </strong>
                  В случае ухудшения самочувствия ребенок обязан сообщить
                  воспитателю и обратиться к врачу Лагеря. Родитель (или
                  законный представитель) извещается врачом в случае обращения
                  ребенка в стационарное медицинское учреждение.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.8.{' '}
                  </strong>
                  Вывозить детей за территорию ДОЛ в период смены категорически
                  запрещено (только по причине болезни)!!! Вывезенный ребенок
                  при возврате в ДОЛ считается вновь прибывшим и, в соответствии
                  с санитарно-эпидемиологическими требованиями 2.4.4.3155-13,
                  должен иметь справку о неконтактности от участкового педиатра
                  вне зависимости от времени отсутствия в ДОЛ. Привезенный в
                  лагерь ребенок в течение суток находится под наблюдением
                  врача.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.9.{' '}
                  </strong>
                  Каждый ребенок обязан бережно относиться к личному имуществу,
                  имуществу других детей и имуществу Лагеря. За сохранность
                  личных вещей он несет ответственность самостоятельно.
                  Администрация Лагеря не несет ответственности за их утерю.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.10.{' '}
                  </strong>
                  Администрация и сотрудники Лагеря не несут ответственности за
                  вещи, которые не сданы в камеру хранения, и тем более, за
                  мобильный телефон, находящийся у ребёнка.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.11.{' '}
                  </strong>
                  Каждый ребенок обязан соблюдать правила поведения в
                  общественных местах (сквернословие, моральное и физическое
                  оскорбление личности, разжигание национальной розни не
                  допускается).
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.12.{' '}
                  </strong>
                  Каждый ребенок должен соблюдать следующие правила нахождения в
                  корпусе: нельзя бегать по лестницам, коридорам, открывать
                  окна, вставать и садиться на перила лестничных ограждений и
                  подоконники, толкать друг друга.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    3.13.{' '}
                  </strong>
                  Каждый ребенок должен бережно относиться к окружающей природе
                  (зеленым насаждениям на территории Лагеря, соблюдать чистоту).
                </p>
              </div>
            </div>

            {/* 4. Вещи ребенка */}
            <div className="mb-6 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 border-b border-border pb-2 text-xl font-bold text-foreground">
                4. Вещи ребенка
              </h3>

              <div className="mb-4 grid grid-cols-1 gap-6 border-b p-4 lg:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-primary">
                    4.1. Разрешенные вещи:
                  </h4>
                  <ul className="font-medium">
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>
                        предметы личной гигиены: зубная щётка, паста, мыло,
                        мочалка, шампунь, расчёска, личное сменное бельё;
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>
                        сменная обувь для корпуса, лёгкая домашняя одежда для
                        корпуса;
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>повседневная и нарядная одежда;</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>
                        одежда для прогулок, обувь, головной убор от солнца;
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>
                        удобная одежда для спортивных мероприятий и спортивная
                        обувь.
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>
                        купальный костюм (резиновую шапочку, сланцы, очки,
                        мочалку, полотенце для бассейна);
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>
                        фотоаппараты, плееры (сдавать воспитателю на хранение).
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-lg font-semibold text-destructive">
                    4.2. Запрещенные вещи:
                  </h4>
                  <ul className="font-medium">
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        оружие всех видов, горючие и взрывчатые вещества, ножи и
                        острые предметы, за исключением предметов для шитья и
                        личной гигиены;{' '}
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        пиротехнические игрушки (петарды, шутихи и проч.),
                        травмоопасное оборудование (скейты, роликовые коньки,
                        самокаты и т.п.) и игрушки, стреляющие пластмассовыми
                        пулями;{' '}
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        сигареты, зажигалки, спички и любые виды алкоголя;
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        сильнодействующие лекарства. При необходимости
                        применения таких лекарств родители должны передать их
                        воспитателю, врачу Лагеря и сообщить условия/график
                        приема;
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        печатную, аудио/видео/компьютерную продукцию, содержащую
                        пропаганду насилия и порнографии. Администрация Лагеря
                        оставляет за собой право изъятия общественно опасных
                        предметов с последующей передачей их родителям.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    4.3.{' '}
                  </strong>
                  Попытка получить (купить, «достать») запрещенные вещи, а также
                  обнаружение их у ребенка в Лагере будут считаться
                  противоправным действием ребенка.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    4.4.{' '}
                  </strong>
                  Забытые вещи в лагере хранится в течение 6 месяцев, после
                  обнаружения. В течение этого времени родители или законные
                  представители могут забрать забытую вещь.
                </p>
              </div>
            </div>

            {/* 5. Правила посещения */}
            <div className="mb-6 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 border-b border-border pb-2 text-xl font-bold text-foreground">
                5. Правила посещения ребёнка в лагере
              </h3>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    5.1.{' '}
                  </strong>
                  При посещении ребенка необходимо предварительно связаться с
                  ним и уточнить распорядок дня. Категорически запрещается
                  посещение родителей во время приема пищи, тихого часа, во
                  время проведения общелагерного мероприятия.{' '}
                  <u>
                    п. 11.13 СанПин 2.4.4.3155-13 «Встречи детей с посетителями,
                    в том числе с законными представителями детей проводятся в
                    соответствии с установленным руководителем детского
                    оздоровительного лагеря распорядком дня.
                  </u>
                </p>
              </div>

              <div className="mb-4">
                <u className="font-medium">
                  Не допускается пребывание на территории детского
                  оздоровительного лагеря посетителей, в том числе законных
                  представителей детей вне специально установленных местах».
                </u>
              </div>

              <div className="mb-4">
                <strong className="font-medium">
                  В случае наличия необходимости забрать ребенка, следует иметь
                  в виду, что ребенка из детского лагеря могут забрать только
                  родители с предоставлением документов, подтверждающих личность
                  и родство (паспорт). Другие родственники должны иметь
                  нотариально заверенную доверенность.
                </strong>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    5.2.{' '}
                  </strong>
                  Запрещается посещать ребенка с любыми домашними животными.
                </p>
              </div>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    5.3.{' '}
                  </strong>
                  Продукты, запрещенные санитарными службами для передачи в
                  условиях загородного лагеря в соответствии с требованиями
                  Приложение № 6 (СанПин 2.4.4.3155-13):
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-primary">
                    5.4. Разрешенные продукты:
                  </h4>
                  <ul className="font-medium">
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>сухие мучные изделия (печенье, сушки);</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>леденцы, карамель;</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>
                        вода минеральная, питьевая - в неограниченном
                        количестве;
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>соки (натуральные в упаковке 0,2 мл).</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-destructive">
                    5.3. Запрещенные продукты:
                  </h4>
                  <ul className="font-medium">
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        газированные напитки (Фанта, Спрайт, Кока-кола и т.д.);
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        пирожные, торты (любые изделия с кремом и наполнителем);
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>сухарики, чипсы;</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        молочные продукты (йогурты, творожные массы, сырки
                        глазированные);
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        птица-рыба-мясо, любые копчёности, колбаса и т.д;
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        соленья, супы, котлеты, пельмени, пироги и т.д.;
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        консервы, грибы, супы, пюре, лапша быстрого
                        приготовления;
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>
                        приготовленная пища (домашняя, купленная в кулинарии);
                      </span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                      <span>салаты.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 6. Правила отчисления */}
            <div className="mb-6 rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 border-b border-border pb-2 text-xl font-bold text-foreground">
                6. Правила отчисления ребенка из Лагеря
              </h3>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    6.1.{' '}
                  </strong>
                  Администрация Лагеря имеет право отчислить ребёнка из Лагеря
                  по следующим причинам:
                </p>
              </div>

              <div className="mb-4 rounded-lg border-l-4 border-destructive bg-destructive/10 p-4">
                <p className="mb-2 font-bold text-destructive">
                  6.1. Причины для отчисления:
                </p>
                <ul className="text-foreground">
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      грубое нарушение мер собственной безопасности, нарушение
                      режима;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      самовольный уход с территории Лагеря или из корпуса после
                      отбоя;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      неоднократное нарушение правил поведения в бассейне;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      нарушение правил пожарной безопасности,
                      электробезопасности;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      воровство, вымогательство, угрозы, нанесение морального
                      или физического ущерба со стороны ребенка по отношению к
                      другим детям;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      нанесение значительного умышленного материального ущерба
                      Лагерю;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      употребление спиртных напитков (включая пиво,
                      энергетические напитки), наркотических средств, курение;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      обнаружение у ребенка медицинских противопоказаний или
                      хронических заболеваний, не указанных в медицинских
                      справках, которые могут негативно отразиться на его
                      здоровье во время пребывания в Лагере;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      распространение и пропаганда курения, пьянства,
                      наркотиков, а также развратное и некультурное поведение,
                      сквернословие, грубость педагогам, нанесение любых
                      телесных повреждений другим лицам;
                    </span>
                  </li>
                  <li className="mb-2 flex items-start">
                    <span className="mt-2.5 mr-3 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-destructive"></span>
                    <span>
                      совершение действий, несущих угрозу жизни или здоровью
                      людей- (сотрудников Лагеря, детей и др).
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    6.2.{' '}
                  </strong>
                  Воспитатель, в присутствии ребенка извещает родителя
                  (законного представителя) о системных нарушениях ребенком
                  вышеуказанных правил и предупреждает об отчислении из Лагеря.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    6.3.{' '}
                  </strong>
                  Отчисление производится при наличии актов, медицинских справок
                  и других документов, подтверждающих вышеуказанные причины.
                </p>
              </div>
              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    6.4.{' '}
                  </strong>
                  За причиненный ущерб имуществу Лагеря ответственность несут
                  родители (или законные представители) ребенка в установленном
                  законом порядке.
                </p>
              </div>
            </div>

            {/* 7. Правила возвращения */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-4 border-b border-border pb-2 text-xl font-bold text-foreground">
                7. Правила возвращения ребенка из Лагеря домой
              </h3>

              <div className="mb-4">
                <p className="font-medium">
                  <strong className="mb-2 font-bold text-foreground">
                    7.1.{' '}
                  </strong>
                  Дети доставляются из Лагеря организованно, в оговоренное
                  заранее место и время, и передаются сопровождающими родителям
                  или доверенным лицам по следующему порядку: родитель
                  (доверенное лицо) подходит к сопровождающему, предъявляет
                  паспорт, забирает документы ребенка, и забирает ребенка. В
                  случае опоздания родитель извещает сопровождающего о причине
                  задержки. Сопровождающий в течение одного часа ждет родителей
                  на месте прибытия. После истечения срока сопровождающий имеет
                  право доставить ребенка по указанному в путевке адресу
                  проживания.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
