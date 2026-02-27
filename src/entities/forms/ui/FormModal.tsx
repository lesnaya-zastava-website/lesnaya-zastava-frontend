import { useState, useEffect } from 'react';
import { useFormConfig } from '../model/useFormConfig';
import { useFormSubmission } from '../model/useFormSubmission';
import { FormFields } from './FormFields';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/components/ui/card';
import { Button } from '@/shared/ui/components/ui/button';
import { useQueryClient } from '@tanstack/react-query';
import type { Form } from '../model/types';

interface FormModalProps {
  form: Form;
  onClose: () => void;
}

export const FormModal: React.FC<FormModalProps> = ({ form, onClose }) => {
  const queryClient = useQueryClient();
  const { data: config, isLoading: configLoading } = useFormConfig(form.documentId);
  const submission = useFormSubmission();
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (config) {
      const initialData: Record<string, any> = {};
      config.fields.fields.forEach((field) => {
        if (field.type === 'checkbox') {
          // Если есть options - это группа чекбоксов (массив), иначе одиночный чекбокс (boolean)
          initialData[field.name] = field.options && field.options.length > 0 ? [] : false;
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

  const handleFieldChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setServerError(null);
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    
    if (!config) return;

    // Валидация
    const newErrors: Record<string, string> = {};
    config.fields.fields.forEach((field) => {
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
      const referer = window.location.href;
      
      // Подготовка данных для отправки
      const submissionData: Record<string, any> = {};
      
      // Обрабатываем каждое поле
      Object.keys(formData).forEach((key) => {
        const value = formData[key];
        
        // Для файлов конвертируем в base64 или отправляем как есть
        if (value instanceof File) {
          // Если бэкенд поддерживает файлы через FormData, можно будет переделать
          // Пока отправляем имя файла
          submissionData[key] = value.name;
        } else {
          submissionData[key] = value;
        }
      });
      
      await submission.mutateAsync({
        formId: form.documentId,
        submission: submissionData,
        referer,
      });
      
      // Показываем сообщение об успехе
      alert(form.successMessage || 'Форма успешно отправлена!');
      onClose();
    } catch (error: any) {
      const status = error?.response?.status || error?.error?.status;
      const errorMessage = error?.response?.data?.error?.message || 
                          error?.message || 
                          form.errorMessage || 
                          'Произошла ошибка при отправке формы';
      
      setServerError(errorMessage);

      // При 400 (лимит мест исчерпан) — обновляем конфигурацию формы,
      // чтобы обновились счётчики и заблокировались заполненные опции
      if (status === 400) {
        await queryClient.invalidateQueries({ queryKey: ['api-forms-config', form.documentId] });
      }
    }
  };

  if (configLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6">
            <p className="text-center">Загрузка формы...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6">
            <p className="text-center text-destructive mb-4">Ошибка загрузки формы</p>
            <Button onClick={onClose} className="w-full">
              Закрыть
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-2xl">{form.title}</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-10 w-10 text-xl">
            ×
          </Button>
        </CardHeader>

        <CardContent className="overflow-y-auto flex-1">
          {form.description && (
            <div className="mb-6 p-4 bg-muted rounded-md">
              <p className="text-sm text-muted-foreground whitespace-pre-line">{form.description}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormFields
              fields={config.fields.fields}
              formData={formData}
              errors={errors}
              onChange={handleFieldChange}
            />

            {serverError && (
              <div className="rounded-md border border-destructive bg-destructive/10 p-3">
                <p className="text-sm text-destructive">{serverError}</p>
              </div>
            )}

            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={submission.isPending}
                className="flex-1"
              >
                {submission.isPending ? 'Отправка...' : 'Отправить'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Отмена
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

