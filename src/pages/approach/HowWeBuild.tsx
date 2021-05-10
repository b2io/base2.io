import { NextPage } from 'next';
import { css } from '@emotion/react';

import { Heading, Link } from '~/components';
import { spacing, atMinTablet } from '~/theme';

export const HowWeBuild: NextPage = () => {
  return (
    <section>
      <Heading
        as="h2"
        variant="h2"
        css={css`
          margin-bottom: ${spacing.xs};
        `}
      >
        How we build.
      </Heading>
      <Heading
        as="h3"
        variant="h3"
        css={css`
          margin-bottom: ${spacing.xxl};
          max-width: 51.938rem;

          ${atMinTablet} {
            margin-bottom: ${spacing.xxl1};
          }
        `}
      >
        Let&apos;s face it—things pop up along the way. Our development process
        is intentionally flexible to allow us to accomodate the unexpected.
        While we work with everyone uniquely, a few steps are central to our
        approach.
      </Heading>
      <div></div>
      <Link href="" variant="CTA">
        Let&apos;s make a plan together
      </Link>
    </section>
  );
};
