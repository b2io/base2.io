import { css } from '@emotion/react';
import type { FC } from 'react';

import { Card, CardGrid, Heading, IconCard } from '~/components';
import { atMinTablet, atMinXL, spacing } from '~/theme';

export const WorkingAtB2: FC = () => {
  return (
    <section
      css={css`
        margin-top: ${spacing.xxl2};
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
          margin-top: ${spacing.xxl3};
        }
      `}
    >
      <Card
        css={css`
          margin-bottom: ${spacing.xxl1};
          max-width: 51.938rem;
        `}
      >
        <Heading
          css={css`
            margin-bottom: ${spacing.sm};
          `}
          as="h2"
          variant="h2"
        >
          Working at Base Two
        </Heading>
        <Heading as="h3" variant="h3">
          We look for candidates who are both ambitous and genuine. Independent
          thinkers who are more interested in creative approaches than
          out-of-the-box engineering solutions.
        </Heading>
      </Card>
      <CardGrid
        css={css`
          margin-bottom: ${spacing.xxl1};

          ${atMinTablet} {
            margin-bottom: ${spacing.xxl5};
          }
        `}
      >
        <IconCard
          heading="Developer"
          icon="developer"
          text="Our developers are skilled at handling the entire project pipeline
          while making sure you’re satisfied at each step of our process. A
          dedicated contact within our team is always available to answer your
          questions, and daily standups provide an opportunity for you to weigh
          in on our progress."
        />

        <IconCard
          heading="Community"
          icon="community"
          text="If you prefer to manage the project in-house, but need more expertise
          to cross the finish line, our team is happy to join your ranks.
          Working alongside your project managers, analysts, and subject matter
          experts, we’ll offer our own development knowledge and help create
          something stellar."
        />
        <IconCard
          heading="Business"
          icon="business"
          text="If you prefer to manage the project in-house, but need more expertise
          to cross the finish line, our team is happy to join your ranks.
          Working alongside your project managers, analysts, and subject matter
          experts, we’ll offer our own development knowledge and help create
          something stellar."
        />
      </CardGrid>
    </section>
  );
};
