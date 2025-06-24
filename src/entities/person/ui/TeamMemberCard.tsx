import type { TeamMember } from '@entities/person/model/types';
import { API_BASE_URL } from '@shared/api/baseApi';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/shared/components/ui/card';

export const TeamMemberCard: React.FC<{ member: TeamMember }> = ({
  member,
}) => (
  <Card
    key={member.id}
    className="items-center text-center">
    <CardContent>
      <img
        className="h-[400px] max-w-full object-cover"
        src={`${API_BASE_URL}${member?.photo?.url}`}
        alt={`${member.fullName} - ${member.job}`}
      />
    </CardContent>
    <CardTitle>{member.fullName}</CardTitle>
    <CardDescription className="max-w-2/3 font-medium">
      {member.job}
    </CardDescription>
    <CardDescription className="font-medium">{member.email}</CardDescription>
  </Card>
);
