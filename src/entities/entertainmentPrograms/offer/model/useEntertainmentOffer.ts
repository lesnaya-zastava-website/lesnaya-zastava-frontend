import { useQuery } from '@tanstack/react-query';
import type { EntertainmentOffer } from './types';
import { fetchEntertainmentOffer } from '@shared/api/entertainmentProgramsApi';

export const useEntertainmentOffer = () => {
  return useQuery({
    queryKey: ['entertainment-offers'],
    queryFn: async (): Promise<EntertainmentOffer[]> => {
      const data = await fetchEntertainmentOffer();
      return data;
    },
  });
};
