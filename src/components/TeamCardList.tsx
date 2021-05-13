import styled from '@emotion/styled';

import { FC } from 'react';
import { TeamMemberCard } from './TeamMemberCard';
import { spacing } from '~/theme/spacing';
import { atMinXL } from '~/theme';

import team from 'team.json';

const TeamMasonry = styled.section`
  columns: 1;

  ${atMinXL} {
    column-gap: ${spacing.xs};
    columns: 3;

    & article {
      break-inside: avoid;
      padding-bottom: 7rem;
      width: 100%;
      &:nth-of-type(1) {
        padding-top: 8rem;
      }
      &:nth-of-type(5) {
        padding-top: 16rem;
      }
    }
  }
`;

export const TeamCardList: FC = () => {
  return (
    <TeamMasonry>
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
    </TeamMasonry>
  );
};
