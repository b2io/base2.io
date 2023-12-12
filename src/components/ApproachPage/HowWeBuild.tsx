import { css } from '@emotion/react';
import NextImage from 'next/image';
import type { FC } from 'react';

import {
  CardGrid,
  GradientCircle,
  Heading,
  IconCard,
  Link,
} from '~/components';
import {
  atMinDesktop,
  atMinLargeDesktop,
  atMinTablet,
  atMinXL,
  cssClamp,
  spacing,
} from '~/theme';

const circleDimensionsCalc = cssClamp([25.625, 'mobile'], [69.5, 'tablet']);

export const HowWeBuild: FC = (props) => {
  return (
    <section
      css={css`
        position: relative;
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
        }
      `}
      {...props}
    >
      <div
        css={css`
          position: relative;
          margin-bottom: 3.813rem;
          width: ${cssClamp(
            [16.688, 'mobile'],
            [38.063, 'tablet'],
            [64.5, 'desktop'],
          )};
          z-index: 1;
          ${atMinLargeDesktop} {
            margin-left: -14rem;
          }
        `}
      >
        <div
          css={css`
            position: relative;
            margin-bottom: 3.813rem;
            margin-left: calc(50% - 50vw);
            padding-top: ${cssClamp([5.125, 'mobile'], [17.313, 'tablet'])};
            width: ${cssClamp(
              [16.688, 'mobile'],
              [38.063, 'tablet'],
              [64.5, 'desktop'],
            )};
            z-index: 1;

            img {
              height: auto;
              width: 100%;
            }

            ${atMinLargeDesktop} {
              margin-left: -14rem;
            }
          `}
        >
          <NextImage
            alt="person staring at code on a computer screen"
            src={require('./images/howwebuild-large.jpg')}
          />
        </div>
        <GradientCircle
          css={css`
            height: ${circleDimensionsCalc};
            position: absolute;
            right: calc(77% - ${circleDimensionsCalc});
            top: 0;
            width: ${circleDimensionsCalc};
            z-index: 0;

            ${atMinDesktop} {
              right: calc(57% - ${circleDimensionsCalc});
            }
          `}
        />
      </div>

      <Heading
        as="h2"
        variant="h2"
        css={css`
          margin-bottom: ${spacing.xs};
          position: relative;
          z-index: 1;
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
          position: relative;
          z-index: 1;

          ${atMinTablet} {
            margin-bottom: ${spacing.xxl1};
          }
        `}
      >
        Let&rsquo;s face it&mdash;things pop up along the way. Our development
        process is intentionally flexible to allow us to accommodate the
        unexpected. While we work with everyone uniquely, a few steps are
        central to our approach.
      </Heading>
      <CardGrid
        css={css`
          margin-bottom: 5rem;
          position: relative;
          z-index: 1;
        `}
      >
        <IconCard
          heading="Discovery"
          icon="discovery"
          text="Your idea forms the basis of our process. We work with you to fully
          understand the story you want communicated or the problem you want
          solved—and how it fits into your entire ecosystem."
        ></IconCard>
        <IconCard
          heading="Execution"
          icon="execution"
          text="We follow a software development methodology called agile, involving
          two-week development sprints, daily standups, demos of completed
          tasks, and retrospectives for feedback and course correction."
        ></IconCard>
        <IconCard
          text=" At the end of each sprint, we release software and gather user
          feedback to better shape it moving forward. We also debut completed
          software outside of the production environment, take it fully live,
          and share it with the world."
          icon="delivery"
          heading="Delivery"
        ></IconCard>
        <IconCard
          text=" Support completes the loop, but not our relationship. During this
          phase, a concentrated team of developers will be available to fix bugs
          and make any necessary adjustments to the structure, flow and
          documentation."
          icon="support"
          heading="Support"
        ></IconCard>
      </CardGrid>
      <Link href="/contact" variant="CTA">
        Let&apos;s make a plan together
      </Link>
    </section>
  );
};
