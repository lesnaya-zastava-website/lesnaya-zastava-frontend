import { useQuery } from '@tanstack/react-query';
import type { HistoryText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useHistoryText = () => {
  return useQuery({
    queryKey: ['history-text'],
    queryFn: async (): Promise<HistoryText[]> => {
      const data = await apiClient.getHistoryText();
      return data;
    },
  });
};

