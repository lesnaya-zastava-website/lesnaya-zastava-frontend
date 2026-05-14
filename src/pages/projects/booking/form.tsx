import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormConfig } from '@/entities/forms/model/useFormConfig';
import { useFormSubmission } from '@/entities/forms/model/useFormSubmission';
import { useForms } from '@/entities/forms/model/useForms';
import { FormFields } from '@/entities/forms/ui/FormFields';
import { Card, CardContent, CardHeader } from '@/shared/ui/components/ui/card';
import { Button } from '@/shared/ui/components/ui/button';
import { PageHeading } from '@/shared/ui/PageHeading';
import { Loader } from '@/shared/ui/components/ui/loader';

export const BookingForm: React.FC = () => {
  const { formId } = useParams<{ formId: string }>();
  const navigate = useNavigate();
  const { data: forms } = useForms();
  const { data: config, isLoading: configLoading } = useFormConfig(
    formId || '',
  );
  const submission = useFormSubmission();
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Находим форму по documentId
  const form = forms?.find(f => f.documentId === formId);

  useEffect(() => {
    if (!formId) {
      navigate('/projects/booking', { replace: true });
      return;
    }

    if (form && !form.active) {
      navigate('/projects/booking', { replace: true });
      return;
    }
  }, [formId, form, navigate]);

  useEffect(() => {
    if (config) {
      const initialData: Record<string, unknown> = {};
      config.fields.fields.forEach(field => {
        if (field.type === 'checkbox') {
          // Если есть options - это группа чекбоксов (массив), иначе одиночный чекбокс (boolean)
          initialData[field.name] =
            field.options && field.options.length > 0 ? [] : false;
        } else if (field.type === 'number') {
          initialData[field.name] = '';
        } else if (field.type === 'file') {
          initialData[field.name] = null;
        } else {
          initialData[field.name] = '';
        }
      });
      setFormData(initialData);
    }
  }, [config]);

  const validateField = (field: any, value: any): string => {
    if (field.validation?.required) {
      if (field.type === 'checkbox') {
        // Для группы чекбоксов проверяем массив
        if (field.options && field.options.length > 0) {
          if (!Array.isArray(value) || value.length === 0) {
            return 'Это поле обязательно для заполнения';
          }
        } else {
          // Для одиночного чекбокса проверяем boolean
          if (value !== true && value !== 'true') {
            return 'Это поле обязательно для заполнения';
          }
        }
      } else if (field.type === 'file') {
        if (!value) {
          return 'Это поле обязательно для заполнения';
        }
      } else if (field.type === 'number') {
        if (value === '' || value === null || value === undefined) {
          return 'Это поле обязательно для заполнения';
        }
      } else {
        if (!value || (typeof value === 'string' && value.trim() === '')) {
          return 'Это поле обязательно для заполнения';
        }
      }
    }
    return '';
  };

  const handleFieldChange = (name: string, value: unknown) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!config || !formId) return;

    // Валидация
    const newErrors: Record<string, string> = {};
    config.fields.fields.forEach(field => {
      const error = validateField(field, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const module = await import('cyrillic-to-translit-js');
      const translate = module.default();

      const referer = window.location.href;

      // Подготовка данных для отправки
      // В Strapi отправляем оригинальные ключи field.name,
      // для CRM формируем отдельный payload c транслитом
      const submissionForStrapi: Record<string, unknown> = {};
      const submissionForCrm: Record<string, unknown> = {};

      Object.keys(formData).forEach(key => {
        const value =
          formData[key] instanceof File ? formData[key].name : formData[key];

        submissionForStrapi[key] = value;
        submissionForCrm[translate.transform(key)] = value;
      });

      fetch(
        'https://test-elma.zinc.ru/api/extensions/a3a54e31-beb0-4e1a-9297-302a5a12365d/script/sokhranit_zayavku_s_saita_lesnoi_zastavy',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            __name: 'Заголовок отсутствует',
            ...submissionForCrm,
          }),
        },
      )
        .then(res => console.log(res))
        .catch(res => console.log(res));

      await submission.mutateAsync({
        formId,
        submission: submissionForStrapi,
        referer,
      });

      // Показываем сообщение об успехе
      alert(form?.successMessage || 'Форма успешно отправлена!');
      navigate('/projects/booking');
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        error?.message ||
        form?.errorMessage ||
        'Произошла ошибка при отправке формы';
      alert(errorMessage);
    }
  };

  // Не рендерим форму, пока не убедимся что она активна
  if (form && !form.active) {
    return null;
  }

  if (configLoading) {
    return (
      <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="container mx-auto border-t border-gray-200 py-5">
          <PageHeading>Загрузка формы...</PageHeading>
          <Loader />
        </div>
      </section>
    );
  }

  if (!config || !form) {
    return (
      <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="container mx-auto border-t border-gray-200 py-5">
          <PageHeading>Ошибка загрузки формы</PageHeading>
          <div className="mt-4">
            <Button onClick={() => navigate('/projects/booking')}>
              Вернуться к списку форм
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>{form.title}</PageHeading>

        <div className="mx-auto mt-6 max-w-3xl">
          <Card>
            <CardHeader>
              {form.description && (
                <div className="mb-4 rounded-md bg-muted p-4">
                  <p className="text-sm whitespace-pre-line text-muted-foreground">
                    {form.description}
                  </p>
                </div>
              )}
            </CardHeader>

            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6">
                <FormFields
                  fields={config.fields.fields}
                  formData={formData}
                  errors={errors}
                  onChange={handleFieldChange}
                />

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={submission.isPending}
                    className="flex-1">
                    {submission.isPending ? 'Отправка...' : 'Отправить'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/projects/booking')}>
                    Отмена
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
