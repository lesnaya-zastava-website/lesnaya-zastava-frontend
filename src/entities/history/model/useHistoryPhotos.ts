import { useQuery } from '@tanstack/react-query';
import type { HistoryGallery } from './types';
import { fetchHistoryPhotos } from '@/shared/api/historyApi';

export const useHistoryPhotos = () => {
  return useQuery({
    queryKey: ['history-photo'],
    queryFn: async (): Promise<HistoryGallery[]> => {
      const data = await fetchHistoryPhotos();
      return data;
    },
  });
};
