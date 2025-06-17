import { useTeam } from '@/entities/person/model/useTeam';
import { TeamMemberCard } from '@/entities/person/ui/TeamMemberCard';

import { PageHeading } from '@shared/PageHeading';

export const Team: React.FC = () => {
  const { data: teamMembers, isLoading, isError } = useTeam();


  return (
    <section className="mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-auto border-t border-gray-200 py-5">
        <PageHeading>Наша команда</PageHeading>
        {isLoading && <p>Загрузка...</p>}

        {isError && <p className="text-red-500">Ошибка при загрузке...</p>}

        {!isLoading && !isError && teamMembers?.length === 0 && (
          <p className="mt-4">Список команды отсутствует.</p>
        )}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2">
          {teamMembers?.map(member => <TeamMemberCard key={member.id} member={member} />)}
        </div>
      </div>
    </section>
  );
};
