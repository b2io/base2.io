import css from '@emotion/css';
import { NextPage } from 'next';
import { FC } from 'react';

import { atMinLg, cssClamp } from '~/theme';
import { Heading, Layout, Link, Text } from '~/components';
import { DesignedForHumansPane } from '~/components/panes';

const HomeHero: FC = () => {
  return (
    <div
      css={css`
        display: grid;
        gap: ${cssClamp([2, 'mobile'], [1.5, 'desktop'])};
        padding: ${cssClamp([3, 'mobile'], [10.5, 'desktop'])}
          // comment to ignore ts-styled-plugin warnings
          ${cssClamp([1.5, 'mobile'], [5.25, 'desktop'])};
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

const HomePage: NextPage = () => {
  return (
    <Layout>
      <HomeHero />
      <DesignedForHumansPane />
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
      <Link href="/404" variant="CTA">
        404
      </Link>
    </Layout>
  );
};

export default HomePage;
