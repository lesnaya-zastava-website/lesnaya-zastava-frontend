import { fetchTeachers } from '@/shared/api/personsApi';
import { useQuery } from '@tanstack/react-query';
import type { Teacher } from './types';

export const useTeacher = () => {
  return useQuery({
    queryKey: ['teachers'],
    queryFn: async (): Promise<Teacher[]> => {
      const data = await fetchTeachers();
      return data;
    },
  });
};
