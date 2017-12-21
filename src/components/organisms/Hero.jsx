import React from 'react';
import styled from 'styled-components';
import { H1, B2LogoText, Img, P } from '../atoms';
import { mediaQuery } from '../../util/style';

const HeroHeader = styled.header`
  grid-column-start: 2;
  grid-row-start: 1;
  margin: 3.75em 0 0 0;
  position: relative;
  text-align: center;

  ${mediaQuery.small`
    margin-top: 4rem;
  `};

  ${mediaQuery.medium`
    margin-top: 8rem;
  `};

  ${mediaQuery.large`
    margin-top: 12rem;
  `};

  ${mediaQuery.xlarge`
    margin-top: 18rem;
  `};
`;

const HeroBackground = styled.div`
  background-image: url('img/backgrounds/hero/b2-hero-background-480.png');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: black;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  ${mediaQuery.small`
    background-image: url('img/backgrounds/hero/b2-hero-background-960.png');
    background-size: 120%;
  `};

  ${mediaQuery.medium`
    background-image: url('img/backgrounds/hero/b2-hero-background-960.png');
    background-size: 120%;
  `};

  ${mediaQuery.large`
    background-image: url('img/backgrounds/hero/b2-hero-background.png');
    background-size: cover;
  `};
`;

const Logo = styled(B2LogoText)`
  position: absolute;
  top: 0;
  left: 0;
`;

const HeroHeading = styled(H1)`
  font-size: 16px;
  height: 0;
  padding-bottom: 2.5rem;
  position: relative;
  width: 80%;
  max-width: 750px;
  margin: 0 auto;

  ${mediaQuery.small`
    padding: 4rem;
  `};

  ${mediaQuery.large`
    padding-bottom: 4.5rem;
  `};
`;

const HeroTagline = styled(P)`
  color: #f2f2f2;
  font-size: 1.15em;
  font-style: italic;
  font-weight: 100;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  text-shadow: 1px 1px 4px #000000;

  ${mediaQuery.small`
    font-size: 1.65rem;
  `};

  ${mediaQuery.medium`
    font-size: 2.0rem;
  `};

  ${mediaQuery.large`
    font-size: 2.25rem;
    margin-top: 0.5em;
  `};
`;

const ScrollIndicator = styled(Img)`
  margin-top: 0.5em;
  width: 3em;

  ${mediaQuery.xsmall`
    position: absolute;
    left: calc(50% - 21px);
    bottom: 15px;
    width: 42px;
  `};

  ${mediaQuery.small`
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

const HeroContent = ({ children }) => children;

class Hero extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <HeroContent>
        <HeroBackground />
        <HeroHeader>
          <HeroHeading>
            <Logo />
          </HeroHeading>
          <HeroTagline> We turn ideas into beautiful software </HeroTagline>
          <ScrollIndicator src="img/scroll-indicator.svg" alt="" />
        </HeroHeader>
      </HeroContent>
    );
  }
}

export default Hero;
