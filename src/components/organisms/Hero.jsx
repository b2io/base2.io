import React from 'react';
import styled from 'styled-components';
import {
  A,
  BaseTwoLogoText,
  H1,
  P
} from '../atoms';
import { ScrollLink } from '../molecules';
import { mediaQuery, themed, webpBackground } from '../../util/style';

const BGAspectRatio = '1.83';

const HeroHeader = styled.header`
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: ${themed('color.background')};
  height: 120vh;
  padding: 3em 0 0 0;
  text-align: center;

  ${webpBackground(
    'img/backgrounds/hero/b2-hero-background-480.png',
    'img/backgrounds/hero/b2-hero-background-480.webp'
    )
  };

  ${mediaQuery.small`
    background-size: 120%;
    min-height: calc((100vw * ${BGAspectRatio}) * 1.2);
    padding-top: 6rem;

    ${webpBackground(
      'img/backgrounds/hero/b2-hero-background-960.png',
      'img/backgrounds/hero/b2-hero-background-960.webp'
      )
    };
  `};

  ${mediaQuery.medium`
    background-size: 120%;
    padding-top: 8rem;

    ${webpBackground(
      'img/backgrounds/hero/b2-hero-background-960.png',
      'img/backgrounds/hero/b2-hero-background-960.webp'
      )
    };
  `};

  ${mediaQuery.large`
    background-size: cover;
    min-height: calc(100vw * ${BGAspectRatio});
    padding-top: 16rem;

    ${webpBackground(
      'img/backgrounds/hero/b2-hero-background.png',
      'img/backgrounds/hero/b2-hero-background.webp'
      )
    };
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
  margin: 0 auto 0.5em;
  max-width: 80vw;
  text-shadow: 1px 1px 4px ${themed('color.background')};
  width: 750px;

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
        <HeroTagline>Our mission is to solve problems that matter. We believe that best outcomes start on a solid foundation: open, honest, and equitable partnerships. Together we make exceptional the standard.</HeroTagline>
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
