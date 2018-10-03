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
  display: flex;
  margin: 4em 0;
`;

const AstronautImg = styled(Img)`
  border-radius: 50%;
  height: auto;
  margin-right: 2em;
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

const HeaderContent = styled.div`
  text-align: center;
`;

const HeaderActions = styled.div`
  display: flex;
  justify-content: space-between;
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
      <AstronautImg src="img/jobs/astronaut.png" />
      <HeaderContent>
        <BaseTwoJobsLogo />
        <SubText>Help us turn ideas into beautiful software</SubText>
        <HeaderActions>
          <Button>Positions</Button>
          <Button>Apprenticeships</Button>
        </HeaderActions>
      </HeaderContent>
    </StyledHeader>
  );
}

export default JobsHeader;
