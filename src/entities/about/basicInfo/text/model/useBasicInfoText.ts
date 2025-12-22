import { useQuery } from '@tanstack/react-query';
import type { BasicInfoResponse } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useBasicInfoText = () => {
  return useQuery({
    queryKey: ['basic-info-text'],
    queryFn: async (): Promise<BasicInfoResponse> => {
      const data = await apiClient.getBasicInfoText();
      return data;
    },
  });
};



