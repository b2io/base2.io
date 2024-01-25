import { css } from '@emotion/react';
import type { FC } from 'react';

import { atMinXL, spacing } from '~/theme';

import { Heading } from '../Common/Heading';
import { Link } from '../Common/Link';
import { Text } from '../Common/Text';

export const AvailablePositions: FC = (props) => {
  return (
    <section
      css={css`
        display: grid;
        gap: 1.5rem;
        justify-items: start;
        max-width: 52rem;

        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
        }
      `}
      {...props}
    >
      <Heading as="h2" variant="h2">
        Let&rsquo;s turn ideas into beautiful software
      </Heading>
      <Text as="p" variant="h3">
        Feeling us? We&rsquo;re always looking for like-minded people with
        similar values and development chops. Our team is tight-knit, seasoned,
        and intentionally small&mdash;allowing everyone&rsquo;s strengths to
        shine.
      </Text>
      <Link
        css={css`
          margin-top: 1rem;
        `}
        href="/contact"
        variant="CTA"
      >
        Contact us
      </Link>
    </section>
  );
};
