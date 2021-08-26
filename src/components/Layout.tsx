import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { cssClamp } from '~/theme';

import { Container } from './Container';
import { Footer } from './Footer';
import { Header } from './Header';

export type LayoutProps = {
  description: string;
  noindex?: boolean;
  title: string;
};

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const mainVariants = {
  enter: { opacity: 1, scale: 1, transition },
  exit: { opacity: 0, scale: 0.5, transition },
  initial: { opacity: 0, scale: 0.9 },
};

export const Layout: FC<LayoutProps> = ({
  children,
  description,
  noindex,
  title,
}) => {
  const router = useRouter();
  const slug = router.asPath.replace(/\/$/, '');
  const pageTitle = title === 'Base Two' ? title : `${title} | Base Two`;

  return (
    <div
      css={css`
        overflow: hidden;
      `}
    >
      <NextSeo
        description={description}
        noindex={noindex}
        openGraph={{
          description,
          images: [
            {
              alt: 'Base Two logo',
              height: 627,
              url: 'https://www.base2.io/og-image.png',
              width: 1200,
            },
          ],
          title: pageTitle,
          type: 'website',
          url: `https://www.base2.io${slug}`,
        }}
        title={pageTitle}
      />
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
    </div>
  );
};
