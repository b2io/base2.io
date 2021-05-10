import { css } from '@emotion/react';
import { FC } from 'react';

import { Heading, IconCard, Link } from '~/components';
import { spacing, atMinTablet, atMinDesktop } from '~/theme';

export const HowWeEngage: FC = (props) => {
  return (
    <section {...props}>
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
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${atMinTablet} {
            flex-direction: row;
          }
        `}
      >
        <IconCard
          icon="fullyManaged"
          heading="Fully managed"
          css={css`
            margin-bottom: ${spacing.xxl};
            max-width: 29.063rem;

            ${atMinTablet} {
              margin-bottom: ${spacing.xxl1};
              margin-right: ${spacing.sm};
            }

            ${atMinDesktop} {
              margin-right: ${spacing.xxl3};
            }
          `}
        >
          Our developers are skilled at handling the entire project pipeline
          while making sure you’re satisfied at each step of our process. A
          dedicated contact within our team is always available to answer your
          questions, and daily standups provide an opportunity for you to weigh
          in on our progress.
        </IconCard>
        <IconCard
          icon="embedded"
          heading="Embedded"
          css={css`
            margin-bottom: ${spacing.xxl};
            max-width: 29.063rem;

            ${atMinTablet} {
              margin-bottom: ${spacing.xxl1};
            }
          `}
        >
          If you prefer to manage the project in-house, but need more expertise
          to cross the finish line, our team is happy to join your ranks.
          Working alongside your project managers, analysts, and subject matter
          experts, we’ll offer our own development knowledge and help create
          something stellar.
        </IconCard>
      </div>
      <Link href="/contact" variant="CTA">
        Let&apos;s make a plan together
      </Link>
    </section>
  );
};
