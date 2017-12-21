const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Base Two',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-26131818-3',
        anonymize: true,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: path.join(__dirname, '_content'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    '@jacobmischka/gatsby-plugin-react-svg',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Base Two',
        short_name: 'Base Two',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
        display: 'minimal-ui',
        icons: [
          {
            src: '/img/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/img/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
