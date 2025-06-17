import type { Teacher } from '@entities/person/model/types';
import { API_BASE_URL } from '@shared/api/baseApi';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/shared/components/ui/card';

export const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <Card
      key={teacher.id}
      className="items-center text-center">
      <CardContent>
        <img
          className="h-[400px] max-w-full object-cover"
          src={`${API_BASE_URL}${teacher?.photo?.url}`}
          alt={`${teacher.fullName} - ${teacher.specialization}`}
        />
      </CardContent>
      <CardTitle>{teacher.fullName}</CardTitle>
      <CardDescription>{teacher.qualification}</CardDescription>
      <CardDescription>{teacher.specialization}</CardDescription>
    </Card>
  );
};
