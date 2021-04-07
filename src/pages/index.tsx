import css from '@emotion/css';
import { NextPage } from 'next';

import { atMinLg, bp } from '~/breakpoints';
import {
  CTA,
  Layout,
  Heading,
  responsiveViewportRelativeSize,
  Text,
} from '~/components';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <div
        css={css`
          display: grid;
          gap: 2rem;
          padding: 3rem 1.5rem;
          text-align: center;

          ${atMinLg} {
            gap: 1.5rem;
            padding: 10.5rem 5.25rem;
          }
        `}
      >
        <Heading
          as="h1"
          css={css`
            font-size: ${responsiveViewportRelativeSize({
              maxValue: 6.25,
              maxWidth: bp.lg / 16,
              minValue: 3.75,
              minWidth: (bp.sm - 1) / 16,
            })};
          `}
        >
          Software that{' '}
          <br
            css={css`
              display: none;

              ${atMinLg} {
                display: block;
              }
            `}
          />
          moves people.
        </Heading>
        <Text variant="h3">At Base Two, it all starts with a human touch.</Text>
      </div>
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
