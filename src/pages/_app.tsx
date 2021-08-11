import 'normalize.css';
import { css, Global, ThemeProvider } from '@emotion/react';
import { SSRProvider } from '@react-aria/ssr';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import theme, { colors } from '~/theme';

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const pageKey = [router.locale, router.asPath].filter(Boolean).join(';');

  return (
    <>
      <Head>
        <link
          as="font"
          crossOrigin="anonymous"
          href="/RoobertGX.woff2"
          rel="preload"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="/RoobertItalicGX.woff2"
          rel="preload"
        />
      </Head>
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
          <ThemeProvider theme={theme}>
            <Global
              styles={css`
                @font-face {
                  font-display: swap;
                  font-family: 'Roobert';
                  font-style: normal;
                  font-weight: 100 900;
                  src: url(/RoobertGX.woff2) format('woff2-variations');
                }

                @font-face {
                  font-display: swap;
                  font-family: 'Roobert';
                  font-style: italic;
                  font-weight: 100 900;
                  src: url(/RoobertItalicGX.woff2) format('woff2-variations');
                }

                :root {
                  color-scheme: dark;
                }

                * {
                  box-sizing: border-box;
                  font-family: Roobert, sans-serif;
                  font-feature-settings: 'ss02', 'ss05';
                }

                body,
                html {
                  background-color: ${colors.background};
                }
              `}
            />
            <SSRProvider>
              <Component {...pageProps} key={pageKey} />
            </SSRProvider>
          </ThemeProvider>
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
};

export default CustomApp;
