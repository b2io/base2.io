const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  headers: async () => {
    return [
      {
        headers: [
          process.env.NODE_ENV === 'production' && {
            key: 'Content-Security-Policy',
            value: [
              "base-uri 'self';",
              "connect-src 'self' https://formspree.io;",
              "default-src 'none';",
              "form-action 'self';",
              "font-src 'self';",
              "frame-ancestors 'none';",
              "img-src 'self' www.googletagmanager.com data:;",
              "manifest-src 'self';",
              "object-src 'none';",
              "prefetch-src 'self';",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;",
              "style-src 'self' 'unsafe-inline';",
            ].join(' '),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ].filter(Boolean),
        source: '/(.*)',
      },
    ];
  },
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US'],
  },
  images: {
    deviceSizes: [375, 576, 768, 992, 1200, 1400, 1600],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap.js');
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(config);
