//components/GoogleAnalytics.tsx
import { useRouter } from 'next/router';
import Script from 'next/script';
import { memo, useEffect } from 'react';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const GoogleAnalytics = () => {
  const router = useRouter();

  // 👇 send page views when users gets to the landing page
  useEffect(() => {
    if (!GA_TRACKING_ID || router.isPreview) return;
    gtag('config', GA_TRACKING_ID, {
      send_page_view: false, //manually send page views to have full control
    });
    gtag('event', 'page_view', {
      page_path: window.location.pathname,
      send_to: GA_TRACKING_ID,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 👇 send page views on route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!GA_TRACKING_ID || router.isPreview) return;
      // manually send page views
      gtag('event', 'page_view', {
        page_path: url,
        send_to: GA_TRACKING_ID,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events, router.isPreview]);

  // 👇 prevent rendering scripts if there is no GA_TRACKING_ID or if it's preview mode.
  if (!GA_TRACKING_ID) {
    console.error('Google Analytics disabled. Tracking ID is undefined.');
    return null;
  }
  if (router.isPreview) {
    console.warn('Google Analytics disabled during live previews.');
    return null;
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      {/* 👇 gtag function definition. */}
      <Script
        // integrity="sha256-RxDuGn3xoenOi9Kwmta7/F4WirIzae3u5DzDzs8S8io=" // needs to be manually updated, both here and next config csp rule, if script changes.
        nonce="3837b8g37b" // recommended to be server generated value per request
        id="gtag-script-id"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
export default memo(GoogleAnalytics);
