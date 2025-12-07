import { useQuery } from '@tanstack/react-query';
import type { MaevkaText } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useMaevkaText = () => {
  return useQuery({
    queryKey: ['maevka-text'],
    queryFn: async (): Promise<MaevkaText[]> => {
      const data = await apiClient.getMaevkaText();
      return data;
    },
  });
};


