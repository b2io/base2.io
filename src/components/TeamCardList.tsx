import styled from '@emotion/styled';
import { FC } from 'react';
import { TeamMemberCard } from './TeamMemberCard';
import team from 'team.json';
import { atMinDesktop, atMinTablet, atMinXL } from '~/theme';
import { spacing } from '~/theme/spacing';
import { colors } from '~/theme/colors';

const TeamMasonry = styled.section`
  columns: 1;
  position: relative;

  ${atMinTablet} {
    column-gap: 2rem;
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
      &:nth-of-type(1) {
        padding-top: 8rem;
      }
      &:nth-of-type(5) {
        padding-top: 16rem;
      }
    }
  }

  ${atMinDesktop} {
    margin-left: -${spacing.xxl};
    margin-right: -${spacing.xxl};
  }

  .team-card-background {
    display: none;

    ${atMinDesktop} {
      /* background-color: ${colors.darkBlueAlt}; */
      background-color: white;
      display: block;
      height: 101.5%;
      left: calc(50% - 50vw);
      /* temp  */
      opacity: 0.5;
      /* temp   */
      position: absolute;
      top: -6.5%;
      width: 100vw;
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
      <div className="team-card-background"></div>
    </TeamMasonry>
  );
};
