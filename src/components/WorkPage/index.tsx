import css from '@emotion/css';
import type { FC } from 'react';

import { Heading, Layout } from '~/components';
import { atMinTablet, spacing } from '~/theme';

import { CaseStudyPreview } from './CaseStudyPreview';
import { FeaturedCaseStudyHero } from './FeaturedCaseStudyHero';

export const WorkPage: FC = () => {
  // TODO: Add description for WorkPage.
  return (
    <Layout description="" title="Work">
      <FeaturedCaseStudyHero />
      <Heading
        as="h2"
        variant="h1"
        css={css`
          margin-bottom: ${spacing.xxl};
          margin-top: ${spacing.xxl};
        `}
      >
        Unique challenges require unique solutions.
      </Heading>
      <div
        css={css`
          --column-shift: ${spacing.xxl};
          display: grid;
          gap: ${spacing.lg};
          grid-template-columns: minmax(350px) 1fr;
          margin: ${spacing.xxl4} 0;
          padding: 0;
          position: relative;
          ${atMinTablet} {
            --column-shift: ${spacing.xxl3};
            gap: ${spacing.xxl};
            grid-template-columns: repeat(2, minmax(0, 1fr));

            > * {
              &:nth-of-type(2n) {
                transform: translateY(calc(var(--column-shift)));
              }
            }
          }
        `}
      >
        <CaseStudyPreview
          alt={'netjets app screenshot'}
          src={require('./images/net-jets.jpg')}
          title="Fly Netjets"
          info="Native application compiles to IOS & Android"
          link="netjets"
        />

        <CaseStudyPreview
          alt={'scopebuilder screenshot'}
          src={require('./images/scopebuilder.jpg')}
          title="AEP ScopeBuilder"
          info="Custom web-based application"
          link="scopebuilder"
        />

        <CaseStudyPreview
          alt={'gl battery xt screenshot'}
          src={require('./images/gl-battery.jpg')}
          title="DNV&#8226;GL Battery XT"
          info="Responsive web application"
          link="batteryxt"
        />
      </div>
    </Layout>
  );
};
