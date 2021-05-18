import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout } from '../Layout';
import { PageHero } from '../PageHero';
import { AvailablePositions } from './AvailablePositions';
import { OurCulture } from './OurCulture';
import { Text } from '../Text';
import { TeamCardList } from '../TeamCardList';
import { TeamHero } from '../TeamHero';
import { atMinDesktop } from '~/theme';
import { Heading } from '../Heading';
import { Link } from '../Link';

export const CulturePage: FC = () => {
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
        text="We are engineers and artisans, collaborat&shy;ing to make custom software people love."
      />
      <OurCulture
        css={css`
          margin-top: 8.5rem;
        `}
      />
      <AvailablePositions
        css={css`
          margin-top: 12.5rem;
        `}
      />
      <section>
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
          ${atMinDesktop} {
            margin-bottom: -4rem;
          }
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
