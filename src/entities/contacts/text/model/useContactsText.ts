import { useQuery } from '@tanstack/react-query';
import type { ContactsResponse } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useContactsText = () => {
  return useQuery({
    queryKey: ['contacts-text'],
    queryFn: async (): Promise<ContactsResponse> => {
      const data = await apiClient.getContactsText();
      return data;
    },
  });
};



