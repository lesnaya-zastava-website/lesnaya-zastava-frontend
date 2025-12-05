import type React from 'react';
import { PageHeading } from '@/shared/ui/PageHeading';

export const ParentThings: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-border py-8">
        <PageHeading>Список необходимых вещей</PageHeading>

        <div className="mt-6">
          <div className="leading-relaxed text-muted-foreground">
            <p className="mb-4 text-lg text-foreground">
              Уважаемые родители, собирая чемодан для ребенка, убедитесь, что
              все вещи ему хорошо знакомы. Советуем также составить письменный
              перечень вещей и ознакомить ребенка с содержимым его багажа. Вещи
              следует подписать (особенно актуально для малышей), поскольку дети
              часто путают свои вещи с вещами других детей или забывают их в
              лагере. По окончании смены все найденные вещи попадают в камеру
              хранения.
            </p>

            <div className="mb-6 rounded-lg border-l-4 border-primary bg-primary/10 p-4">
              <p className="font-medium text-foreground">
                Вещи должны быть упакованы в удобный для транспортировки чемодан
                или сумку. Багаж маленьких детей должен быть промаркирован.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-6 border-b border-border pb-2 text-xl font-bold text-foreground">
                Необходимые вещи:
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-foreground">
                    Одежда
                  </h4>
                  <ul className="text-muted-foreground">
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>рубашки/платья (2-3 шт)</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>брюки (2 пары)</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>свитер/тёплая кофта (2 шт)</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>одежда для занятий спортом</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>праздничная одежда (для вечерних мероприятий)</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>белье (2-4 пары)</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>куртка</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>носки (3-4 пары)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-lg font-semibold text-foreground">
                    Обувь и аксессуары
                  </h4>
                  <ul className="mb-6 text-muted-foreground">
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>спортивная обувь для занятий в зале</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>тапочки (1 пара)</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>обувь для улицы (2 пары)</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>головной убор (2 шт)</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>носовые платки (3-5 шт)</span>
                    </li>
                  </ul>

                  <h4 className="mb-3 text-lg font-semibold text-foreground">
                    Для купания и гигиены
                  </h4>
                  <ul className="text-muted-foreground">
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>купальный костюм и шапочка</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>полотенце для лица, банное полотенце, мочалка</span>
                    </li>
                    <li className="mb-2 flex items-start">
                      <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>
                        туалетные принадлежности (мыло, шампунь для волос,
                        зубная паста, зубная щетка, расческа)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
