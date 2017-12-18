import React from 'react';
import styled from 'styled-components';
import { H1, Img, P } from '../atoms';
import { mediaQuery } from '../../util/style';

const HeroHeader = styled.header`
  grid-column-start: 2;
  grid-row-start: 1;
  margin: 4.5em 0 0 0;
  position: relative;
  text-align: center;

  ${mediaQuery.small`
  margin-top: 9rem;
`};

  ${mediaQuery.medium`
    margin-top: 12rem;
  `};

  ${mediaQuery.large`
    margin-top: 17rem;
  `};

  ${mediaQuery.xlarge`
  margin-top: 18rem;
`};
`;

const HeroBackground = styled.div`
  background-image: url('img/backgrounds/hero/B2HeroBackground_480.png');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: black;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;

  ${mediaQuery.small`
    background-image: url('img/backgrounds/hero/B2HeroBackground_960.png');
    background-size: 120%;
  `};

  ${mediaQuery.medium`
    background-image: url('img/backgrounds/hero/B2HeroBackground.png');
    background-size: 120%;
  `};

  ${mediaQuery.large`
    background-size: cover;
  `};
`;

const Logo = styled(Img)`
  width: 80%;
  max-width: 750px;

  ${mediaQuery.small`
  width: 65%;
`};
`;

const HeroHeading = styled(H1)`
  //This is to prevent the extra div around the image in Logo from addng content space at the top
  font-size: 16px;
  margin: 0;
`;

const HeroTagline = styled(P)`
  color: #f2f2f2;
  font-size: 1.15em;
  font-style: italic;
  font-weight: 100;
  margin-top: 0.75em;
  margin-bottom: 0.5em;
  text-shadow: 1px 1px 4px #000000;

  ${mediaQuery.small`
    font-size: 1.75rem;
  `};

  ${mediaQuery.medium`
    font-size: 2.25rem;
  `};

  ${mediaQuery.large`
    font-size: 3rem;
  `};
`;

const ScrollIndicator = styled(Img)`
  width: 3em;

  ${mediaQuery.xsmall`
  position: absolute;
  left: calc(50% - 21px);
  bottom: 15px;
  width: 42px;

`};

  ${mediaQuery.small`
  position: relative;
  margin-top: 1em;
  width: 4em;
`};
`;

class Hero extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return [
      <HeroBackground key={0}>,</HeroBackground>,
      <HeroHeader key={1}>
        <HeroHeading>
          <Logo src="img/b2Logo.svg" alt="Base Two" />
        </HeroHeading>
        <HeroTagline> We turn ideas into beautiful software </HeroTagline>
        <ScrollIndicator src="img/scroll-indicator.svg" alt="" />
      </HeroHeader>,
    ];
  }
}

export default Hero;
