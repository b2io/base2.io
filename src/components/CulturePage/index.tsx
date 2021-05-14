import { css } from '@emotion/react';
import type { FC } from 'react';

import { Heading } from '../Heading';
import { Layout } from '../Layout';
import { Link } from '../Link';
import { PageHero } from '../PageHero';
import { Text } from '../Text';
import { TeamCardList } from '../TeamCardList';
import { TeamHero } from '../TeamHero';

export type CulturePageProps = Record<string, never>;

export const CulturePage: FC<CulturePageProps> = () => {
  return (
    <Layout title="Culture">
      <PageHero
        alt="people sitting around conference table collaborating"
        imgSource={{
          largeDesktop: '/culture/culture-hero-xlarge.jpg',
          tablet: '/culture/culture-hero-medium.jpg',
          xl: '/culture/culture-hero-large.jpg',
          xs: '/culture/culture-hero-small.jpg',
        }}
        text="We are engineers and artisans, collaborating to make custom software people love."
      />
      <section
        css={css`
          display: grid;
          gap: 1.5rem;
          justify-items: start;
          margin-top: 12.5rem;
          max-width: 52rem;
        `}
      >
        <Heading as="h2" variant="h2">
          Let&rsquo;s turn ideas into beautiful software
        </Heading>
        <Text as="p" variant="h3">
          Feeling us? We&rsquo;re always looking for like-minded people with
          similar values and development chops. Our team is tight-knit,
          seasoned, and intentionally small&mdash;allowing everyone&rsquo;s
          strengths to shine.
        </Text>
        <Link
          css={css`
            margin-top: 1rem;
          `}
          href="/culture"
          variant="CTA"
        >
          See all available positions
        </Link>
      </section>
      <TeamHero
        alt="person wearing hat smiling"
        css={css`
          margin-bottom: 5rem;
        `}
        imgSource={{
          desktop: '/culture/team-hero/culture-ourteam-xlarge.jpg',
          tablet: '/culture/team-hero/culture-ourteam-large.jpg',
          xs: '/culture/team-hero/culture-ourteam-small.jpg',
        }}
        text="Our team"
      />
      <TeamCardList />
    </Layout>
  );
};
