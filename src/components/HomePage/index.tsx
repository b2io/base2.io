import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout } from '~/components';
import { atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';

import { CaseStudy, CaseStudyNav } from '../WorkPage/CaseStudyNav';
import { BuiltForResults } from './BuiltForResults';
import { DesignedForHumans } from './DesignedForHumans';
import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
import { HomeHero } from './HomeHero';

export type HomePageProps = Record<string, unknown>;

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Layout
      css={css`
        margin-top: 0;
      `}
      description="Software that moves people. At Base Two, it all starts with a human touch."
      title="Base Two"
    >
      <HomeHero />
      <DesignedForHumans
        css={css`
          margin-top: ${cssClamp([10.5, 'mobile'], [1.5, 'desktop'])};
        `}
      />
      <BuiltForResults
        css={css`
          margin-top: ${cssClamp([12.5, 'mobile'], [16.5, 'desktop'])};
        `}
      />
      <FeaturedCaseStudy
        css={css`
          margin-top: ${cssClamp([12.5, 'mobile'], [17.5, 'tablet'])};

          ${atMinXL} {
            margin-top: ${spacing.xxl};
          }
        `}
      />
      <FueledByCuriosity
        css={css`
          margin-top: ${spacing.xxl5};

          ${atMinTablet} {
            margin-top: -${spacing.xxl2};
          }

          ${atMinXL} {
            margin-top: ${spacing.xxl};
          }
        `}
      />
      <CaseStudyNav>
        <CaseStudy
          alt="netjets case study image"
          client="NetJets"
          caseStudy="Fly NetJets"
          href="/work/netjets"
          src={require('../WorkPage/images/netjets.jpg')}
        />
        <CaseStudy
          alt="scopebuilder case study image"
          caseStudy="ScopeBuilder"
          client="AEP"
          href="/work/scopebuilder"
          src={require('../WorkPage/images/scopebuilder.jpg')}
        />
      </CaseStudyNav>
    </Layout>
  );
};
