import css from '@emotion/css';
import Image from 'next/image';
import { NextPage } from 'next';
import { FC } from 'react';

import { atMinLg, cssClamp } from '~/theme';
import { CTA, Layout, Heading, Text } from '~/components';

const HomeHero: FC = () => {
  return (
    <div
      css={css`
        display: grid;
        gap: ${cssClamp([2, 'xs'], [1.5, 'lg'])};
        padding: ${cssClamp([3, 'xs'], [10.5, 'lg'])}
          // comment to ignore ts-styled-plugin warnings
          ${cssClamp([1.5, 'xs'], [5.25, 'lg'])};
        text-align: center;
      `}
    >
      <Heading as="h1">
        Software that{' '}
        <br
          css={css`
            display: none;

            ${atMinLg} {
              display: inline-block;
            }
          `}
        />
        moves people.
      </Heading>
      <Text variant="h3">At Base Two, it all starts with a human touch.</Text>
    </div>
  );
};

const DesignForHumans: FC = () => {
  return (
    <div>
      <Image
        alt="woman looking at phone"
        src="/home/humans.jpg"
        height={375}
        width={375}
      />
      <Heading as="h2" variant="h2">
        Designed for{' '}
        <Text as="span" variant="hero">
          humans.
        </Text>
      </Heading>
    </div>
  );
};

const HomePage: NextPage = () => {
  return (
    <Layout>
      <HomeHero />
      <DesignForHumans />
      <Heading as="h2" variant="h2">
        Built for{' '}
        <Text as="span" variant="hero">
          results.
        </Text>
      </Heading>
      <Heading as="h2" variant="h2">
        Fueled by{' '}
        <Text as="span" variant="hero">
          curiosity.
        </Text>
      </Heading>
      <CTA href="/404">404</CTA>
    </Layout>
  );
};

export default HomePage;
