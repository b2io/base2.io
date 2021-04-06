import { NextPage } from 'next';

import { CTA, Layout, Heading, Text } from '~/components';
import { css } from '@emotion/react';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Heading as="h1">Software that moves people.</Heading>
      <Text variant="h3">At Base Two, it all starts with a human touch.</Text>
      <Heading as="h2" variant="h2">
        Designed for{' '}
        <Text as="span" variant="hero">
          humans.
        </Text>
      </Heading>
      <Heading as="h2" variant="h2">
        Built for{' '}
        <Text as="span" variant="hero">
          results.
        </Text>
      </Heading>
      <Heading as="h2" variant="h2">
        Fueled by{' '}
        <Text
          as="span"
          css={css`
            position: relative;
            left: 50%;
          `}
          variant="hero"
        >
          curiosity.
        </Text>
      </Heading>
      <CTA href="/404">404</CTA>
    </Layout>
  );
};

export default HomePage;
