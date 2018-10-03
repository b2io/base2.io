import React from 'react';
import styled from 'styled-components';
import { mediaQuery, themed } from '../../util/style';
import { A, BaseTwoLogoText, H1, P } from '../atoms';
import { ScrollLink } from '../molecules';

const BGAspectRatio = '1.83';

const HeroHeader = styled.header`
  background-image: url('img/backgrounds/hero/b2-hero-background-480.png');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: ${themed('color.background')};
  height: 120vh;
  padding: 3em 0 0 0;
  text-align: center;

  ${mediaQuery.small`
    background-image: url('img/backgrounds/hero/b2-hero-background-960.png');
    background-size: 120%;
    min-height: calc((100vw * ${BGAspectRatio}) * 1.2);
    padding-top: 6rem;
  `};

  ${mediaQuery.medium`
    background-image: url('img/backgrounds/hero/b2-hero-background-960.png');
    background-size: 120%;
    padding-top: 8rem;
  `};

  ${mediaQuery.large`
    background-image: url('img/backgrounds/hero/b2-hero-background.png');
    background-size: cover;
    min-height: calc(100vw * ${BGAspectRatio});
    padding-top: 16rem;
  `};

  ${mediaQuery.xlarge`
    padding-top: 18rem;
  `};
`;

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

function Hero() {
  return (
    <>
      <HeroHeader>
        <HeroHeading>
          <BaseTwoLogoText id="hero-logo" />
        </HeroHeading>
        <HeroTagline> We turn ideas into beautiful software </HeroTagline>
        <ScrollLink target="next" title="Scroll down for more">
          <SatelliteIndicator
            alt="Arrows pointing downward"
            src="img/scroll-indicator.svg"
          />
        </ScrollLink>
      </HeroHeader>
      <A id="next" />
    </>
  );
}

export default Hero;
