import type React from 'react';
import { useParentRulesText } from '@/entities/forParents/parentRules/text/model/useParentRulesText';
import { Loader } from '@/shared/ui/components/ui/loader';

export const ParentRules: React.FC = () => {
  const {
    data: dataText,
    isLoading: isLoadingText,
    isError: isErrorText,
    isSuccess: isSuccessText,
  } = useParentRulesText();

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <div className="mb-4 flex flex-col gap-3">
          {isLoadingText && <Loader />}

          {isErrorText && (
            <p className="text-red-500">Ошибка при загрузке текста</p>
          )}

          {!isLoadingText && !isErrorText && dataText?.length === 0 && (
            <p className="mt-4">Текст отсутствует.</p>
          )}

          {isSuccessText &&
            dataText?.map(item => (
              <div
                key={item.id}
                className="styled-html-content"
                dangerouslySetInnerHTML={{ __html: item.textHtml }}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
  