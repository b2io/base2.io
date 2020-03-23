import React from 'react';
import styled from 'styled-components';
import { A, BaseTwoLogoText, H1, P } from '../atoms';
import { ScrollLink } from '../molecules';
import { mediaQuery, themed } from '../../util/style';
import HeroHeader from './HeroHeader';

const HeroHeading = styled(H1)`
  padding: 0;
  position: relative;
  width: 80%;
  max-width: 750px;
  margin: 0 auto;
  overflow: hidden;
`;

const HeroTagline = styled(P)`
  color: ${themed('color.text')};
  font-size: 0.9em;
  font-style: italic;
  font-weight: 200;
  margin: 2em auto;
  max-width: 80vw;
  text-shadow: 2px 2px 4px ${themed('color.background')};
  width: 750px;

  ${mediaQuery.small`
    font-size: 1.35rem;
  `};

  ${mediaQuery.medium`
    font-size: 1.5rem;
  `};

  ${mediaQuery.large`
    font-size: 1.75rem;
  `};
`;

const SatelliteIndicator = styled.img`
  width: 3em;

  ${mediaQuery.xsmall`
    left: calc(50% - 21px);
    position: absolute;
    top: calc(100vh - 100px);
    width: 42px;
  `};

  ${mediaQuery.small`
    margin-top: 0.5em;
    position: relative;
    width: 4em;
  `};

  ${mediaQuery.medium`
    margin-top: 0.75em;
  `};

  ${mediaQuery.medium`
    margin-top: 0.5em;
  `};
`;

const scroll = {
  target: 'next',
  title: 'Scroll down for more',
};

const HeroContent = ({ children }) => children;

function Hero() {
  return (
    <HeroContent>
      <HeroHeader>
        <HeroHeading>
          <BaseTwoLogoText id="hero-logo" />
        </HeroHeading>
        <HeroTagline>
          Our mission is to solve problems that matter. We believe that best
          outcomes start on a solid foundation: open, honest, and equitable
          partnerships. Together we make exceptional the standard.
        </HeroTagline>
        <ScrollLink target={scroll.target} title={scroll.title}>
          <SatelliteIndicator
            alt="Arrows pointing downward"
            src="/img/scroll-indicator.svg"
          />
        </ScrollLink>
      </HeroHeader>
      <A id="next" />
    </HeroContent>
  );
}

export default Hero;
