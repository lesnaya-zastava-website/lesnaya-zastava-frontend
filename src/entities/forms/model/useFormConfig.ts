import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/apiClient';
import type { FormConfig } from './types';

export const useFormConfig = (formId: string | null) => {
  return useQuery({
    queryKey: ['api-forms-config', formId],
    queryFn: async (): Promise<FormConfig> => {
      if (!formId) throw new Error('Form ID is required');
      const data = await apiClient.getFormConfig(formId);
      return data;
    },
    enabled: !!formId,
  });
};


