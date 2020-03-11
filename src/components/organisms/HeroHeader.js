import styled from 'styled-components';
import { mediaQuery, themed, webpBackground } from '../../util/style';

const BGAspectRatio = '1.83';

const HeroHeader = styled.header`
  background-position: top center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: ${themed('color.background')};
  display: block;
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

export default HeroHeader
