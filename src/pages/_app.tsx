import 'normalize.css';
import { css, Global, ThemeProvider } from '@emotion/react';
import { AnimatePresence, LayoutGroup } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import type { FC } from 'react';

import GoogleAnalytics from '~/analytics/GoogleAnalytics';
import theme, { colors } from '~/theme';

import FeatureFlagsProvider from '../context/FeatureFlagsProvider';

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
      <GoogleAnalytics />
      <DefaultSeo
        additionalLinkTags={[
          {
            href: '/apple-touch-icon.png',
            rel: 'apple-touch-icon',
            sizes: '180x180',
          },
          {
            href: '/favicon-16x16.png',
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            href: '/favicon-32x32.png',
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
          },
        ]}
        openGraph={{
          locale: 'en-US',
          site_name: 'Base Two',
          type: 'website',
          url: 'https://www.base2.io',
        }}
      />
      <Head>
        <link as="font" crossOrigin="anonymous" href="/RoobertGX.woff2" />
        <link as="font" crossOrigin="anonymous" href="/RoobertItalicGX.woff2" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <LayoutGroup>
        <AnimatePresence onExitComplete={handleExitComplete}>
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
            <FeatureFlagsProvider>
              <Component {...pageProps} key={pageKey} />
            </FeatureFlagsProvider>
          </ThemeProvider>
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
};

export default CustomApp;
