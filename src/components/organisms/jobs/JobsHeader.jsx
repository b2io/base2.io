import { em, rem } from 'polished';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mediaQuery, themed } from '../../../util/style';
import { A, BaseTwoJobsLogo, Header, P } from '../../atoms';

const imageSize = {
  default: '260px',
  medium: '360px',
  large: '435px',
};

const StyledHeader = styled(Header)`
  background: url('/img/backgrounds/space-fog-purple.png') bottom center / auto
    100% no-repeat;
  margin-top: ${rem('128px')};
  margin-bottom: ${rem('200px')};
  text-align: center;

  ${mediaQuery.medium`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: ${rem('64px')};
  `};
`;

const AstronautImg = styled.img`
  height: auto;
  margin-bottom: ${em('32px')};
  min-height: 256px;
  width: ${imageSize.default};

  ${mediaQuery.medium`
    min-height: 354px;
    width: ${imageSize.medium};
  `};

  ${mediaQuery.large`
    min-height: 427px;
    width: ${imageSize.large};
  `};
`;

const HeaderContent = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  max-width: ${rem('640px')};
  text-align: center;
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
  font-size: ${rem('18px')};
  font-style: italic;
  font-weight: 100;
  line-height: 1.5;
  margin-top: ${rem('16px')};
  margin-bottom: ${rem('72px')};
  text-shadow: 1px 1px 4px ${themed('color.background')};

  ${mediaQuery.small`
    font-size: ${rem('26px')};
  `};

  ${mediaQuery.medium`
    font-size: ${rem('32px')};
  `};

  ${mediaQuery.large`
    font-size: ${rem('36px')};
  `};
`;

const JobsButton = styled(A)`
  ${themed('button.default')};
  margin-bottom: 2em;
  width: ${em('288px', '24px')};
`;

function JobsHeader({ small }) {
  return (
    <StyledHeader>
      <AstronautImg
        alt="Blue astronaut reaching out to the reader"
        src="/img/jobs/BlueAstronaut.png"
      />
      <HeaderContent>
        <BaseTwoJobsLogo />
        <SubText>Help us turn ideas into beautiful software</SubText>
        {!small && (
          <HeaderActions>
            <JobsButton href="#positions">Positions</JobsButton>
          </HeaderActions>
        )}
      </HeaderContent>
    </StyledHeader>
  );
}

JobsHeader.propTypes = {
  small: PropTypes.bool,
};

JobsHeader.defaultProps = {
  small: false,
};

export default JobsHeader;
