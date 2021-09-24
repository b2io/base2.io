import { css } from '@emotion/react';
import type { FC } from 'react';

import { Heading, Layout, Link, Text } from '~/components';
import { atMinXL, spacing } from '~/theme';

export const Custom404Page: FC = () => {
  return (
    <Layout description="400 Error" noindex title="Custom404Page">
      <div
        css={css`
          ${atMinXL} {
            display: grid;
            gap: ${spacing.md};
          }
        `}
      >
        <Heading as="h2" variant="h1">
          Oops!
        </Heading>
        <Heading as="h3" variant="h2">
          We can&apos;t seem to find what you&apos;re looking for.
        </Heading>
        <Text as="p" variant="h3">
          Here are some helpful links instead:
        </Text>
        <ul
          css={css`
            display: flex;
            gap: ${spacing.md};
            list-style: none;
            margin: 0;
            padding: 0;
          `}
        >
          <Text as="li">
            <Link href="/" variant="CTA">
              Home
            </Link>
          </Text>
          <Text as="li">
            <Link href="/contact" variant="CTA">
              Contact
            </Link>
          </Text>
        </ul>
      </div>
    </Layout>
  );
};
