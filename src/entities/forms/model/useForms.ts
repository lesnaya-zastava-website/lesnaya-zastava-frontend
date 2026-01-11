import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/apiClient';
import type { Form } from './types';

export const useForms = () => {
  return useQuery({
    queryKey: ['api-forms'],
    queryFn: async (): Promise<Form[]> => {
      const data = await apiClient.getForms();
      return data;
    },
  });
};


