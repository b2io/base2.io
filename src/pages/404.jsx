import React from 'react';
import styled from 'styled-components';
import { GlobalNavigation, Main } from '../components';
import HeroHeader from '../components/organisms/HeroHeader';
import { mediaQuery, themed } from '../util/style';

const Heading = styled.h1`
  font-size: 24px;
  font-style: italic;
  font-weight: 300;
  line-height: 26px;
  margin-left: 30px;
  text-align: left;

  ${mediaQuery.smedium`
    font-size: 42px;
    line-height: 48px;
    margin-left: 120px;
  `};

  ${mediaQuery.large`
    font-size: 72px;
    line-height: 78px;
    margin-left: 200px;
  `}

  > strong {
    color: ${themed('color.textAccent')};
    font-weight: inherit;
  }
`;

const SubHeading = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 17px;
  margin-left: 30px;
  text-align: left;

  ${mediaQuery.smedium`
    font-size: 26px;
    line-height: 28px;
    margin-left: 120px;
  `};

  ${mediaQuery.large`
    font-size: 36px;
    line-height: 39px;
    margin-left: 200px;
  `}

  > span {
    display: block;
  }
`;

const AbductionImage = styled.img`
  max-width: 80vw;
  position: absolute;
  right: 1em;
  top: 250px;
  width: 140px;

  ${mediaQuery.smedium`
    top: 60vw;
    width: 225px;
  `};

  ${mediaQuery.large`
    top: 50vw;
    width: 418px;
  `}
`;

export default () => (
  <Main>
    <GlobalNavigation />
    <HeroHeader as="main">
      <Heading>
        Well, 
        {' '}
        <strong>that</strong>
        {' '}
        was unexpected!
      </Heading>
      <SubHeading>
        <span>Our apologies, this page</span>
        <span>is currently... uh... missing.</span>
      </SubHeading>
      <AbductionImage src="img/cow-abduction.png" alt="" />
    </HeroHeader>
  </Main>
);
