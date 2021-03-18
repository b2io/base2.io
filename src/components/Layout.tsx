import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import React, { FC } from 'react';
import { atSm } from '~/breakpoints';

export type LayoutProps = {
  title?: string;
};

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const mainVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: { scale: 0.5, opacity: 0, transition },
};

export const Layout: FC<LayoutProps> = ({ children, title = 'Base Two' }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Base Two` : 'Base Two'}</title>
        <link href="/favicon.svg" rel="icon" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav
          css={() => ({
            display: 'none',
            [atSm]: {
              display: 'block',
            },
          })}
        >
          <ul>
            <li>
              <Link href="/">
                <a>Base Two</a>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <a>Work</a>
              </Link>
            </li>
            <li>
              <Link href="/approach">
                <a>Approach</a>
              </Link>
            </li>
            <li>
              <Link href="/culture">
                <a>Culture</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <motion.main
        animate="enter"
        exit="exit"
        initial="initial"
        variants={mainVariants}
      >
        {children}
      </motion.main>
      <footer>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li>
            <Link href="/approach">
              <a>Approach</a>
            </Link>
          </li>
          <li>
            <Link href="/culture">
              <a>Culture</a>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <a>Careers</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
};
