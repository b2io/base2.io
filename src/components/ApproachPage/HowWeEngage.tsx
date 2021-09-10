import { css } from '@emotion/react';
import type { FC } from 'react';

import { CardGrid, Heading, IconCard, Link } from '~/components';
import { atMinTablet, atMinXL, spacing } from '~/theme';

import { CardGrid, IconCard } from '../Card';

export const HowWeEngage: FC = (props) => {
  return (
    <section
      css={css`
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
        }
      `}
      {...props}
    >
      <Heading
        as="h2"
        variant="h2"
        css={css`
          margin-bottom: ${spacing.xs};
        `}
      >
        How we engage.
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
        Whether we&apos;re embedded in your team or managing a project
        internally, you&apos;ll hear from us often.
      </Heading>
      <CardGrid
        css={css`
          margin-bottom: 5rem;
        `}
      >
        <IconCard
          heading="Fully managed"
          icon="fullyManaged"
          text="Our developers are skilled at handling the entire project pipeline
          while making sure you’re satisfied at each step of our process. A
          dedicated contact within our team is always available to answer your
          questions, and daily standups provide an opportunity for you to weigh
          in on our progress."
        />

        <IconCard
          heading="Embedded"
          icon="embedded"
          text="If you prefer to manage the project in-house, but need more expertise
          to cross the finish line, our team is happy to join your ranks.
          Working alongside your project managers, analysts, and subject matter
          experts, we’ll offer our own development knowledge and help create
          something stellar."
        />
      </CardGrid>
      <Link href="/contact" variant="CTA">
        Let&apos;s make a plan together
      </Link>
    </section>
  );
};
