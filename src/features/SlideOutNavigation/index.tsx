import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeading } from '@/shared/ui/PageHeading';

export const SlideOutNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Кнопка-стрелка справа (когда панель закрыта) */}
      {!isOpen && (
        <button
          onClick={toggleNavigation}
          className="fixed right-0 top-1/2 z-40 flex h-12 w-8 -translate-y-1/2 items-center justify-center rounded-l-lg bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 md:h-16 md:w-10"
          aria-label="Открыть навигацию">
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}

      {/* Выдвигающаяся панель */}
      <div
        className={`fixed right-0 top-[120px] z-40 h-[calc(100vh-120px)] w-80 transform bg-background shadow-2xl transition-transform duration-300 ease-in-out md:w-96 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        {/* Кнопка-стрелка внутри панели (когда панель открыта) */}
        {isOpen && (
          <button
            onClick={toggleNavigation}
            className="absolute -left-8 top-1/2 z-50 flex h-12 w-8 -translate-y-1/2 items-center justify-center rounded-l-lg bg-primary text-primary-foreground shadow-lg transition-all hover:bg-primary/90 md:h-16 md:w-10"
            aria-label="Закрыть навигацию">
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        )}
        <div className="flex h-full justify-center flex-col p-6 md:p-8">
          
            <PageHeading>Навигация</PageHeading>
     
          <nav className="">
            <ul className="space-y-4">
              <li>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  to="parent-things"
                  className="block rounded-md border border-transparent p-4 text-sm font-medium transition-colors duration-200 hover:border-primary hover:bg-accent/10 hover:text-primary">
                  Список необходимых вещей
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  to="parent-documents"
                  className="block rounded-md border border-transparent p-4 text-sm font-medium transition-colors duration-200 hover:border-primary hover:bg-accent/10 hover:text-primary">
                  Список необходимых документов
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  to="parent-rules"
                  className="block rounded-md border border-transparent p-4 text-sm font-medium transition-colors duration-200 hover:border-primary hover:bg-accent/10 hover:text-primary">
                  Правила пребывания в ДОЛ "Лесная застава"
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay для мобильных устройств */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

