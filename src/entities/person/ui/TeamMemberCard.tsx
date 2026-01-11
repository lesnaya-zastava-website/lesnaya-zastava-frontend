import type { TeamMember } from '@entities/person/model/types';
import { API_BASE_URL } from '@shared/api/baseApi';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/shared/ui/components/ui/card';
import { ImageWithLoader } from '@/shared/ui/components/ui/image-with-loader';

export const TeamMemberCard: React.FC<{ member: TeamMember }> = ({
  member,
}) => (
  <Card
    key={member.id}
    className="items-center text-center">
    <CardContent>
      <ImageWithLoader
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
