import type React from 'react';
import { PageHeading } from '@/shared/PageHeading';

export const ParentDocuments: React.FC = () => {
  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-border py-8">
        <PageHeading>Список необходимых документов</PageHeading>

        <div className="mt-6">
          <div className="leading-relaxed">
            <div className="mb-6 rounded-lg border-l-4 border-destructive bg-destructive/10 p-4">
              <p className="mb-2 font-bold text-destructive">ВНИМАНИЕ!</p>
              <p className="text-foreground">
                Просим не давать ребенку в лагерь оригиналы свидетельства о
                рождении и медицинского страхового полиса, требуются только
                КОПИИ.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-6 border-b border-border pb-2 text-xl font-bold text-foreground">
                Документы, которые должны быть у ребенка при заезде в лагерь:
              </h3>

              <ul className="text-muted-foreground">
                <li className="mb-4 flex items-start">
                  <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <div>
                    <span className="font-medium text-foreground">
                      путёвка (оригинал);
                    </span>
                  </div>
                </li>

                <li className="mb-4 flex items-start">
                  <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <div>
                    <span className="font-medium text-foreground">
                      медицинская справка (форма №079-у)
                    </span>
                    <span className="text-muted-foreground">
                      {' '}
                      с отметкой о прививках и записью об эпидемиологических
                      контактах по школе; обязательно указать сроки проведенной
                      вакцинации от ветряной оспы (если прививался) или сроки
                      болезни ребенка (если болел);
                    </span>
                  </div>
                </li>

                <li className="mb-4 flex items-start">
                  <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-destructive"></span>
                  <div>
                    <span className="text-muted-foreground italic">
                      *Если ребенок не болел и не прививался – от родителей
                      требуется расписка об отказе от вакцинации;
                    </span>
                  </div>
                </li>

                <li className="mb-4 flex items-start">
                  <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <div>
                    <span className="font-medium text-foreground">
                      справка об эпидемиологических контактах
                    </span>
                    <span className="text-muted-foreground">
                      {' '}
                      (выдаётся педиатром по месту жительства ребёнка не ранее,
                      чем за 3 дня до заезда в лагерь);
                    </span>
                  </div>
                </li>

                <li className="mb-4 flex items-start">
                  <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <div>
                    <span className="font-medium text-foreground">
                      копия медицинского страхового полиса ребенка;
                    </span>
                  </div>
                </li>

                <li className="mb-4 flex items-start">
                  <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <div>
                    <span className="font-medium text-foreground">
                      копия свидетельства о рождении или паспорта ребенка;
                    </span>
                  </div>
                </li>

                <li className="mb-4 flex items-start">
                  <span className="mt-2 mr-3 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                  <div>
                    <span className="font-medium text-foreground">
                      справка из школы.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-lg border border-border bg-muted p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Важно:</span> Все
                документы должны быть актуальными и правильно оформленными. При
                отсутствии необходимых документов ребенок может быть не допущен
                к заезду в лагерь.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
