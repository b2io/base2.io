import { css } from '@emotion/react';
import type { FC } from 'react';

import { Heading, Link, SectionContainer, Text } from '~/components';

export const AvailablePositions: FC = (props) => {
  return (
    <SectionContainer
      css={css`
        display: grid;
        gap: 1.5rem;
        justify-items: start;
        max-width: 52rem;
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
    </SectionContainer>
  );
};
