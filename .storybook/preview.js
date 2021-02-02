import { css, Global, ThemeProvider } from '@emotion/react';

import roobertFont from '../public/RoobertGX.ttf';
import theme from '../src/theme';

export const decorators = [
  (Story) => (
    <>
      <Global
        styles={css`
          @font-face {
            font-display: swap;
            font-family: 'Roobert';
            font-style: normal;
            font-weight: 400;
            src: url(${roobertFont}) format('truetype');
          }

          :root {
            color-scheme: dark;
          }

          * {
            box-sizing: border-box;
            font-family: Roobert;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'dark',
    values: [
      { name: 'dark', value: theme.colors.darkBlue },
      { name: 'light', value: theme.colors.offWhite },
    ],
  },
};
