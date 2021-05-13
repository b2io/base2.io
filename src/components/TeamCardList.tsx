import { FC } from 'react';
import { TeamMemberCard } from './TeamMemberCard';
import team from 'team.json';

export const TeamCardList: FC = () => {
  return (
    // TODO: make section a styled component
    <section>
      {team.map((member, index) => {
        return (
          <TeamMemberCard
            alt={member.name}
            key={index}
            name={member.name}
            position={member.position}
            src={member.src}
          />
        );
      })}
    </section>
  );
};
