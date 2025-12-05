import { useQuery } from '@tanstack/react-query';
import type { Teacher } from './types';
import { apiClient } from '@/shared/api/apiClient';

export const useTeacher = () => {
  return useQuery({
    queryKey: ['teachers'],
    queryFn: async (): Promise<Teacher[]> => {
      const data = await apiClient.getTeachers();
      return data;
    },
  });
};
