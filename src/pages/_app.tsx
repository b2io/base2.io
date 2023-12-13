import 'normalize.css';
import { css, Global, ThemeProvider } from '@emotion/react';
import { SSRProvider } from '@react-aria/ssr';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import type { FC } from 'react';
// import { useEffect } from 'react';

import theme, { colors } from '~/theme';

// import * as gtag from '../../lib/gtag';
import FeatureToggle from '../components/FeatureToggleProvider';

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const pageKey = [router.locale, router.asPath].filter(Boolean).join(';');

  // useEffect(() => {
  //   const handleRouteChange = (url: any) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <SSRProvider>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
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
        <link
          as="font"
          crossOrigin="anonymous"
          href="/RoobertGX.woff2"
          rel="preload"
        />
        <link as="font" crossOrigin="anonymous" href="/RoobertItalicGX.woff2" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
            <FeatureToggle enabledFeatures={['XMAS_MARQUEE']}>
              <Component {...pageProps} key={pageKey} />
            </FeatureToggle>
          </ThemeProvider>
        </AnimatePresence>
      </AnimateSharedLayout>
    </SSRProvider>
  );
};

export default CustomApp;
