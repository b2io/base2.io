import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { BaseTwoJobsLogo, Button, Header, Img, P } from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const imageSize = {
  default: '260px',
  medium: '360px',
  large: '435px',
};

const StyledHeader = styled(Header)`
  align-items: center;
  margin: 4em 0;
  text-align: center;

  ${mediaQuery.small`
  display: flex;
  `};
`;

const AstronautImg = styled(Img)`
  border-radius: 50%;
  height: auto;
  position: relative;
  vertical-align: middle;
  width: ${imageSize.default};
  z-index: 1;

  ${mediaQuery.medium`
    margin-right: 2em;
    width: ${imageSize.medium};
  `};

  ${mediaQuery.large`
    width: ${imageSize.large};
  `};
`;

const HeaderContent = styled.div`
  text-align: center;
  flex-grow: 1;
`;

const HeaderActions = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${mediaQuery.large`
    flex-direction: row;
    justify-content: space-between;
  `};
`;

const SubText = styled(P)`
  color: ${themed('color.text')};
  font-size: 1.15em;
  font-style: italic;
  font-weight: 100;
  margin-top: 7px;
  margin-bottom: 73px;
  text-shadow: 1px 1px 4px ${themed('color.background')};

  ${mediaQuery.small`
    font-size: 1.65rem;
    margin-top: 0.5em;
  `};

  ${mediaQuery.medium`
    font-size: 2.0rem;
    margin-top: 14px;
  `};

  ${mediaQuery.large`
    font-size: 2.25rem;
    margin-bottom: 62px;
  `};
`;

const JobsButton = styled(Button)`
  font-size: ${rem('18px')};
  padding: ${rem('15px')} 0;
  margin-bottom: 2em;
  width: 280px;
`;

function JobsHeader() {
  return (
    <StyledHeader>
      <AstronautImg src="img/jobs/astronaut.png" />
      <HeaderContent>
        <BaseTwoJobsLogo />
        <SubText>Help us turn ideas into beautiful software</SubText>
        <HeaderActions>
          <JobsButton>Positions</JobsButton>
          <JobsButton>Apprenticeships</JobsButton>
        </HeaderActions>
      </HeaderContent>
    </StyledHeader>
  );
}

export default JobsHeader;
