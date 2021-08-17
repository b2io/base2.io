import styled from '@emotion/styled';
import type { FC } from 'react';

import team from '~/team.json';
import { atMinDesktop, atMinSm, atMinXL, spacing } from '~/theme';

import { TeamMemberCard } from './TeamMemberCard';

const TeamMasonry = styled.section`
  columns: 1;
  position: relative;

  img {
    object-fit: cover;
    z-index: 2;
  }

  ${atMinSm} {
    column-gap: ${spacing.md};
    columns: 2;

    & article {
      break-inside: avoid;
      margin-bottom: 4rem;
      &:nth-of-type(1) {
        padding-top: 10rem;
      }
    }
  }

  ${atMinXL} {
    columns: 3;

    & article {
      margin-bottom: 8rem;
      width: 100%;
      z-index: 2;
      &:nth-of-type(1) {
        padding-top: 8rem;
      }
      &:nth-of-type(4) {
        margin-bottom: 0;
      }
      &:nth-of-type(5) {
        margin-bottom: 0;
        padding-top: 7rem;
      }
      &:nth-of-type(6) {
        padding-top: 16rem;
      }
    }
  }

  ${atMinDesktop} {
    margin-left: -${spacing.xxl};
    margin-right: -${spacing.xxl};
    padding-bottom: ${spacing.xxl1};
  }
`;

export const TeamCardList: FC = (props) => {
  return (
    <TeamMasonry {...props}>
      {team.map(({ name, position, src }, index) => (
        <TeamMemberCard
          alt={name}
          key={index}
          name={name}
          position={position}
          src={src}
        />
      ))}
    </TeamMasonry>
  );
};
