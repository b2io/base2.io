import { css, Global, ThemeProvider } from '@emotion/react';

import roobertGX from '../public/RoobertGX.woff2';
import roobertItalicGX from '../public/RoobertItalicGX.woff2';
import theme from '../src/theme';

export const decorators = [
  (Story) => (
    <>
      <Global
        styles={css`
          @font-face {
            font-display: fallback;
            font-family: 'Roobert';
            font-style: normal;
            font-weight: 100 900;
            src: url(${roobertGX}) format('woff2-variations');
          }

          @font-face {
            font-display: fallback;
            font-family: 'Roobert';
            font-style: italic;
            font-weight: 100 900;
            src: url(${roobertItalicGX}) format('woff2-variations');
          }

          :root {
            color-scheme: dark;
          }

          * {
            box-sizing: border-box;
            font-family: Roobert;
            font-feature-settings: 'ss02', 'ss05';
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
