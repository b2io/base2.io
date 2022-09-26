import css from '@emotion/css';
import type { FC } from 'react';

import { Heading, Layout } from '~/components';
import { atMinTablet, spacing } from '~/theme';

import { CaseStudyPreview } from './CaseStudyPreview';
import { FeaturedCaseStudyHero } from './FeaturedCaseStudyHero';

export const WorkPage: FC = () => {
  return (
    <Layout
      description="Unique challenges 
    require unique solutions."
      title="Work"
    >
      <FeaturedCaseStudyHero />
      <Heading
        as="h2"
        css={css`
          margin-bottom: ${spacing.xxl};
          margin-top: ${spacing.xxl};
        `}
        variant="h1"
      >
        Unique challenges require unique solutions.
      </Heading>
      <div
        css={css`
          --column-shift: ${spacing.xxl};

          display: grid;
          gap: ${spacing.lg};
          grid-template-columns: minmax(350px) 1fr;
          margin: ${spacing.xxl2} 0;
          padding: 0;
          position: relative;

          ${atMinTablet} {
            --column-shift: ${spacing.xxl3};

            gap: ${spacing.xxl};
            grid-template-columns: repeat(2, minmax(0, 1fr));

            > *:nth-of-type(2n) {
              transform: translateY(calc(var(--column-shift)));
            }
          }
        `}
      >
        <CaseStudyPreview
          alt={'netjets app screenshot'}
          href="/work/netjets"
          info="Native application compiles to IOS & Android"
          src={require('./images/netjets.jpg')}
          title="Fly Netjets"
        />

        <CaseStudyPreview
          alt={'scopebuilder screenshot'}
          href="/work/scopebuilder"
          info="Custom web-based application"
          src={require('./images/scopebuilder.jpg')}
          title="AEP ScopeBuilder"
        />

        <CaseStudyPreview
          alt={'battery xt screenshot'}
          href="/work/batteryxt"
          info="Responsive web application"
          src={require('./images/batteryxt.jpg')}
          title="DNV Battery XT"
        />
      </div>
    </Layout>
  );
};
