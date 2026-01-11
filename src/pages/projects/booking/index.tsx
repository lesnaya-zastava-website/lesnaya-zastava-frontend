import React from 'react';
import { PageHeading } from '@/shared/ui/PageHeading';
import { useForms } from '@/entities/forms/model/useForms';
import { FormCard } from '@/entities/forms/ui';
import { Loader } from '@/shared/ui/components/ui/loader';

export const Booking: React.FC = () => {
  const { data: forms, isLoading, error } = useForms();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Бронирование путёвок</PageHeading>
        
        {isLoading && <Loader />}

        {error && (
          <div className="mt-10 text-center">
            <p className="text-destructive">Ошибка при загрузке форм. Попробуйте позже.</p>
          </div>
        )}

        {forms && forms.length === 0 && (
          <div className="mt-10 text-center">
            <p className="text-muted-foreground">Формы пока не добавлены</p>
          </div>
        )}

        {forms && forms.length > 0 && (
          <div className="mt-5 flex flex-col gap-4">
            {forms.map((form) => (
              <FormCard
                key={form.documentId}
                form={form}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

