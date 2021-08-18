import styled from '@emotion/styled';
import type { FC } from 'react';

import { atMinDesktop, atMinTablet, atMinXL, spacing } from '~/theme';

import { TeamMemberCard } from './TeamMemberCard';

const TeamMasonry = styled.section`
  --column-shift: ${spacing.xxl};
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 11rem;
  position: relative;

  img {
    object-fit: cover;
    z-index: 2;
  }

  ${atMinTablet} {
    --column-shift: ${spacing.xxl3};
    gap: 2.875rem;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 15rem;

    & article {
      break-inside: avoid;
      margin-bottom: 4rem;
    }
  }

  ${atMinXL} {
    grid-template-columns: repeat(3, 1fr);

    & article {
      margin-bottom: 0;
      margin-top: 8rem;
      width: 100%;
      z-index: 2;
    }

    > * {
      &:nth-of-type(2n) {
        transform: translateY(var(--column-shift));
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
      <TeamMemberCard
        name="Drew Miller"
        position="Owner & Principal Software Engineer"
        src={require('../../../public/culture/team/dmiller.jpg')}
      />
      <TeamMemberCard
        name="Mike Condo"
        position="Senior Software Engineer I"
        src={require('../../../public/culture/team/mcondo.jpg')}
      />
      <TeamMemberCard
        name="Kate Hansen"
        position="Software Engineer I"
        src={require('../../../public/culture/team/khansen.jpg')}
      />
      <TeamMemberCard
        name="Melissa Lam"
        position="Software Engineer I"
        src={require('../../../public/culture/team/mlam.jpg')}
      />
      <TeamMemberCard
        name="Zachary Chay-Dolan"
        position="Software Engineer III"
        src={require('../../../public/culture/team/zchay-dolan.jpg')}
      />
      <TeamMemberCard
        name="Reed Dunkle"
        position="Senior Software Engineer I"
        src={require('../../../public/culture/team/rdunkle.jpg')}
      />
      <TeamMemberCard
        name="Franky Martinez"
        position="Senior Software Engineer III"
        src={require('../../../public/culture/team/fmartinez.jpg')}
      />
      <TeamMemberCard
        name="Nathan Kessler"
        position="Senior Software Engineer II"
        src={require('../../../public/culture/team/nkessler.jpg')}
      />
      <TeamMemberCard
        name="Tony Borres"
        position="Director of Operations & Staff Software Engineer I"
        src={require('../../../public/culture/team/tborres.jpg')}
      />
      <TeamMemberCard
        name="Chris Hawkins"
        position="Senior Software Engineer III"
        src={require('../../../public/culture/team/chawkins.jpg')}
      />
      <TeamMemberCard
        name="Ashley Singleton"
        position="Software Engineer IV"
        src={require('../../../public/culture/team/asingleton.jpg')}
      />
      <TeamMemberCard
        name="Nelson Foltz"
        position="Software Engineer III"
        src={require('../../../public/culture/team/nfoltz.jpg')}
      />
      <TeamMemberCard
        name="Laura Padilla"
        position="Software Engineer III"
        src={require('../../../public/culture/team/lpadilla.jpg')}
      />
      <TeamMemberCard
        name="Eric Waight"
        position="Software Engineer III"
        src={require('../../../public/culture/team/ewaight.jpg')}
      />
      <TeamMemberCard
        name="Javier Orejarena"
        position="Software Engineer III"
        src={require('../../../public/culture/team/jorejarena.jpg')}
      />
    </TeamMasonry>
  );
};
