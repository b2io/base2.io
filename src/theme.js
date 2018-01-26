import { css } from 'styled-components';
import { lighten, rem, transparentize } from 'polished';

// COLOR:

const palette = {
  black: 'rgba(0, 0, 0, 1.0)',
  blackTransparent: 'rgba(0, 0, 0, 0.3)',
  deepBlue: 'rgba(3, 8, 40, 1.0)',
  grey: 'rgba(153, 153, 153, 1.0)',
  purple: 'rgba(106, 72, 153, 1.0)',
  spaceGreen: 'rgba(128, 203, 196, 1.0)',
  spaceBlue: 'rgba(124, 177, 255, 1.0)',
  transparent: 'rgba(0, 0, 0, 0.0)',
  white: 'rgba(255, 255, 255, 1.0)',
};

const navPalette = {
  navAccent: palette.purple,
  navBackgroundOpen: palette.black,
  navText: palette.grey,
  navTextSmall: palette.spaceBlue,
};

function makeTheme(color) {
  // MOTION:

  const motion = {
    color: css`
      transition-duration: 85ms;
    `,
    size: css`
      transition-duration: 200ms;
    `,
  };

  // FONT:

  const font = {
    sansSerif: css`
      font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      font-weight: 100;
    `,
  };

  const typography = {
    subheading: css`
      font-family: ${font};
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    `,
    caption: css`
      font-family: ${font};
      font-size: 12px;
      font-weight: 400;
      line-height: 1;
    `,
  };

  // BUTTON:

  const button = {
    default: css`
      background-color: ${color.black};
      background-image: linear-gradient(${color.white}, ${color.spaceBlue}),
        linear-gradient(${color.white}, ${color.spaceBlue});
      background-size: 1px 100%;
      background-position: 0 0, 100% 0;
      background-repeat: no-repeat;
      border-style: solid;
      border-width: 1px 0;
      border-color: ${color.white} transparent ${color.spaceBlue};
      box-shadow: 0 0 10px ${color.spaceBlue};
      color: ${color.spaceBlue};
      cursor: pointer;
      font-size: 1.5em;
      line-height: 1;
      overflow: hidden;
      padding: ${rem('15px')} ${rem('120px')};
      text-transform: uppercase;

      &:focus,
      &:hover {
        background-color: ${color.deepBlue};
        color: ${color.white};
      }

      &:active {
        background-color: ${lighten(0.1, color.deepBlue)};
      }
    `,
  };

  return {
    color,
    motion,
    font,
    typography,
    button,
  };
}

const darkColors = {
  ...palette,
  ...navPalette,
  background: palette.black,
  border: palette.white,
  text: palette.white,
  accent: palette.spaceBlue,
  link: palette.spaceBlue,
  linkHover: transparentize(0.15, palette.spaceBlue),
  navBackground: palette.blackTransparent,
};

const lightColors = {
  ...palette,
  ...navPalette,
  background: palette.white,
  border: palette.grey,
  text: palette.black,
  accent: palette.spaceBlue,
  link: palette.purple,
  linkHover: palette.spaceBlue,
  navBackground: palette.black,
};

const darkTheme = makeTheme(darkColors);
const lightTheme = makeTheme(lightColors);

export default darkTheme;
export { darkTheme, lightTheme };
