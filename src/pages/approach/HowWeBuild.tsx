import { NextPage } from 'next';
import { css } from '@emotion/react';

import { Heading, IconCard, Link } from '~/components';
import { spacing, atMinTablet, atMinDesktop } from '~/theme';

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
      <div
        css={css`
          display: flex;
          flex-flow: row wrap;

          > div {
            flex: 1 1 auto;
            margin-bottom: ${spacing.xxl};
            max-width: 20.625rem;

            ${atMinDesktop} {
              max-width: 29.063rem;
            }
          }

          > :nth-child(odd) {
            margin-right: 1.875rem;

            ${atMinDesktop} {
              margin-right: 16.688rem;
            }
          }
        `}
      >
        <IconCard icon="discovery" heading="Discovery">
          Your idea forms the basis of our process. We work with you to fully
          understand the story you want communicated or the problem you want
          solved—and how it fits into your entire ecosystem.
        </IconCard>
        <IconCard icon="execution" heading="Execution">
          We follow a software development methodology called agile, involving
          two-week development sprints, daily standups, demos of completed
          tasks, and retrospectives for feedback and course correction.
        </IconCard>
        <IconCard icon="delivery" heading="Delivery">
          At the end of each sprint, we release software and gather user
          feedback to better shape it moving forward. We also debut completed
          software outside of the production environment, take it fully live,
          and share it with the world.
        </IconCard>
        <IconCard icon="support" heading="Support">
          Support completes the loop, but not our relationship. During this
          phase, a concentrated team of developers will be available to fix bugs
          and make any necessary adjustments to the structure, flow and
          documentation.
        </IconCard>
      </div>
      <Link href="" variant="CTA">
        Let&apos;s make a plan together
      </Link>
    </section>
  );
};
