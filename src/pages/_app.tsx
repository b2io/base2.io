import { css, Global, ThemeProvider } from '@emotion/react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { FC } from 'react';

import theme from '~/theme';
import 'normalize.css';

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const pageKey = [router.locale, router.asPath].filter(Boolean).join(';');

  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
              * {
                box-sizing: border-box;
                font-family: Roobert, sans-serif;
                font-feature-settings: 'ss02', 'ss05';
              }

              body,
              html {
                background-color: ${theme.colors.background};
              }
            `}
          />
          <Component {...pageProps} key={pageKey} />
        </ThemeProvider>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};

export default CustomApp;
