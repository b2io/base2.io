import React from 'react';
import styled from 'styled-components';
import { BaseTwoJobsLogo, Button, Header, Img, P } from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const imageSize = {
  default: '70px',
  medium: '110px',
  large: '150px',
};

const StyledHeader = styled(Header)`
  margin-top: 4em;
`;

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

const SubText = styled(P)`
  color: ${themed('color.text')};
  font-size: 1.15em;
  font-style: italic;
  font-weight: 100;
  margin-top: 0;
  margin-bottom: 0.5em;
  text-shadow: 1px 1px 4px ${themed('color.background')};

  ${mediaQuery.small`
    font-size: 1.65rem;
    margin-top: 0.5em;
  `};

  ${mediaQuery.medium`
    font-size: 2.0rem;
  `};

  ${mediaQuery.large`
    font-size: 2.25rem;
  `};
`;

function JobsHeader() {
  return (
    <StyledHeader>
      <AstronautImg src="../../_content/team/chawkins.jpg" />
      <BaseTwoJobsLogo />
      <SubText>Help us turn ideas into beautiful software</SubText>
      <Button>Positions</Button>
      <Button>Apprenticeships</Button>
    </StyledHeader>
  );
}

export default JobsHeader;
