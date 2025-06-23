import { useQuery } from '@tanstack/react-query';
import type { EntertainmentPrice } from './types';
import { fetchEntertainmentPrice } from '@/shared/api/entertainmentProgramsApi';

export const useEntertainmentPrice = () => {
  return useQuery({
    queryKey: ['entertainment-prices'],
    queryFn: async (): Promise<EntertainmentPrice[]> => {
      const data = await fetchEntertainmentPrice();
      return data;
    },
  });
};
