import { css } from '@emotion/react';
import type { FC } from 'react';

import { Heading, Layout, Link } from '~/components';
import { atMinXL, spacing } from '~/theme';

export const Custom500Page: FC = () => {
  return (
    <Layout noindex description="500 Error" title="Custom500ErrorPage">
      <div
        css={css`
          ${atMinXL} {
            display: grid;
            gap: ${spacing.md};
            justify-items: start;
          }
        `}
      >
        <Heading as="h2" variant="h1">
          Oh no!
        </Heading>
        <Heading as="h3" variant="h2">
          Something has gone wrong and we&apos;ve encountered a 500 error.
        </Heading>
        <Link
          href="mailto:info@base2.io"
          rel="noopener"
          target="_blank"
          variant="CTA"
        >
          Tell us what happened
        </Link>
      </div>
    </Layout>
  );
};
