import React from 'react';
import styled from 'styled-components';
import { Header, Img } from '../atoms';
import { mediaQuery } from '../../util/style';

const imageSize = {
  default: '70px',
  medium: '110px',
  large: '150px',
};

const AstronautImg = styled(Img)`
  border-radius: 50%;
  height: auto;
  position: relative;
  vertical-align: middle;
  width: ${imageSize.default};
  z-index: 1;

  ${mediaQuery.medium`
    width: ${imageSize.medium};
  `};

  ${mediaQuery.large`
    width: ${imageSize.large};
  `};
`;

const JoinOurTeamImg = styled(Img)`
  border-radius: 50%;
  height: auto;
  position: relative;
  vertical-align: middle;
  width: ${imageSize.default};
  z-index: 1;

  ${mediaQuery.medium`
    width: ${imageSize.medium};
  `};

  ${mediaQuery.large`
    width: ${imageSize.large};
  `};
`;

function JobsHeader() {
  return (
    <Header>
      <AstronautImg src="../../_content/team/chawkins.jpg" />
      <JoinOurTeamImg src="../../_content/team/chawkins.jpg" />
    </Header>
  );
}

export default JobsHeader;
