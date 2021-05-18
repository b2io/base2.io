import styled from '@emotion/styled';
import { FC } from 'react';
import { TeamMemberCard } from './TeamMemberCard';
import team from 'team.json';
import { atMinDesktop, atMinSm, atMinXL } from '~/theme';
import { spacing } from '~/theme/spacing';
import { colors } from '~/theme/colors';

const TeamMasonry = styled.section`
  columns: 1;
  position: relative;

  img {
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

  .team-card-background {
    display: none;

    ${atMinDesktop} {
      background-color: ${colors.darkBlueAlt};
      border-bottom: 1px solid #979797;
      border-top: 1px solid #979797;
      bottom: 0;
      display: block;
      height: calc(100% + 14rem);
      left: calc(50% - 50vw);
      position: absolute;
      width: 100vw;
      z-index: 0;
    }
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
      <div className="team-card-background" />
    </TeamMasonry>
  );
};
