import { useQuery } from '@tanstack/react-query';
import type { ParentRulesText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useParentRulesText = () => {
  return useQuery({
    queryKey: ['parent-rules-text'],
    queryFn: async (): Promise<ParentRulesText[]> => {
      const data = await apiClient.getParentRulesText();
      return data;
    },
  });
};

