import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { FC } from 'react';

import { Container } from './Container';
import { Header } from './Header';
import { Footer } from './Footer';

import { cssClamp } from '~/theme';

const Root = styled.div`
  overflow: hidden;
`;

export type LayoutProps = {
  title?: string;
};

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const mainVariants = {
  enter: { opacity: 1, scale: 1, transition },
  exit: { opacity: 0, scale: 0.5, transition },
  initial: { opacity: 0, scale: 0.9 },
};

export const Layout: FC<LayoutProps> = ({ children, title = 'Base Two' }) => {
  return (
    <Root>
      <Head>
        <title>{title ? `${title} | Base Two` : 'Base Two'}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <motion.main
        animate="enter"
        css={css`
          margin-top: ${cssClamp(
            [2.5, 'xs'],
            [6.88, 'mobile'],
            [10.563, 'tablet'],
            [10.75, 'desktop'],
          )};
        `}
        exit="exit"
        initial="initial"
        variants={mainVariants}
      >
        <Container>{children}</Container>
      </motion.main>
      <Footer
        css={css`
          margin-top: 8.536rem;
        `}
      />
    </Root>
  );
};
