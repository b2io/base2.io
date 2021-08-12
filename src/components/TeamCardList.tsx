import styled from '@emotion/styled';
import type { FC } from 'react';

import { atMinDesktop, atMinSm, atMinXL, spacing } from '~/theme';

import { TeamMemberCard } from './TeamMemberCard';

const TeamMasonry = styled.section`
  columns: 1;
  position: relative;

  img {
    z-index: 2;
    object-fit: cover;
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
      <TeamMemberCard
        name="Drew Miller"
        position="Owner & Principal Software Engineer"
        src={require('../../public/culture/team/dmiller.jpg')}
      />
      <TeamMemberCard
        name="Mike Condo"
        position="Senior Software Engineer I"
        src={require('../../public/culture/team/mcondo.jpg')}
      />
      <TeamMemberCard
        name="Kate Hansen"
        position="Software Engineer I"
        src={require('../../public/culture/team/khansen.jpg')}
      />
      <TeamMemberCard
        name="Melissa Lam"
        position="Software Engineer I"
        src={require('../../public/culture/team/mlam.jpg')}
      />
      <TeamMemberCard
        name="Zachary Chay-Dolan"
        position="Software Engineer III"
        src={require('../../public/culture/team/zchay-dolan.jpg')}
      />
      <TeamMemberCard
        name="Reed Dunkle"
        position="Senior Software Engineer I"
        src={require('../../public/culture/team/rdunkle.jpg')}
      />
      <TeamMemberCard
        name="Franky Martinez"
        position="Senior Software Engineer III"
        src={require('../../public/culture/team/fmartinez.jpg')}
      />
      <TeamMemberCard
        name="Nathan Kessler"
        position="Senior Software Engineer II"
        src={require('../../public/culture/team/nkessler.jpg')}
      />
      <TeamMemberCard
        name="Tony Borres"
        position="Director of Operations & Staff Software Engineer I"
        src={require('../../public/culture/team/tborres.jpg')}
      />
      <TeamMemberCard
        name="Chris Hawkins"
        position="Senior Software Engineer III"
        src={require('../../public/culture/team/chawkins.jpg')}
      />
      <TeamMemberCard
        name="Ashley Singleton"
        position="Software Engineer IV"
        src={require('../../public/culture/team/asingleton.jpg')}
      />
      <TeamMemberCard
        name="Nelson Foltz"
        position="Software Engineer III"
        src={require('../../public/culture/team/nfoltz.jpg')}
      />
      <TeamMemberCard
        name="Laura Padilla"
        position="Software Engineer III"
        src={require('../../public/culture/team/lpadilla.jpg')}
      />
    </TeamMasonry>
  );
};
