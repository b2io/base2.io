import { css } from '@emotion/react';
import type { FC } from 'react';

import {
  CaseStudyBottomNav,
  CaseStudyHeaderPane,
  CaseStudyIntroContentPane,
  CaseStudyResultsPane,
  CaseStudySummaryPane,
  Layout,
  TechCard,
  TechListGrid,
} from '~/components';
import { spacing } from '~/theme';

import {
  batteryXtNav,
  colorSnapNav,
  flyNetJetsNav,
  scopeBuilderNav,
} from '../CaseStudy/navProps';

export const AdvonCommercePage: FC = () => {
  const CaseStudyResultsResultsProps = {
    children: [
      {
        heading: 'Generates inbound leads',
        text: 'Serves as a lead generator',
      },
      {
        heading: 'Enhances marketing efforts ',
        text: 'Helps the marketing team demonstrate their product in digital campaigns.',
      },
      {
        heading: 'Invents a complex software',
        text: 'Provides consumers quick results',
      },
      {
        heading: 'Creates opportunity',
        text: 'Demonstrates rich possibilities',
      },
    ],
    resultsParagraph: 'results paragraph lorem ipsum',
  };

  const caseStudyBottomNavProps = {
    children: [colorSnapNav, scopeBuilderNav, batteryXtNav, flyNetJetsNav],
  };

  return (
    <Layout
      description="Case study about Advon Commerce"
      title="Advon Commerce"
    >
      <CaseStudyHeaderPane
        alt="Advon Commerce"
        name="Advon Commerce"
        src={require('./images/advon.jpg')}
      />
      <TechListGrid
        css={css`
          margin-top: ${spacing.sm};
        `}
      >
        <TechCard logo="react" />
        <TechCard logo="nextjs" />
        <TechCard logo="net" />
        <TechCard logo="go" />
      </TechListGrid>
      <CaseStudyIntroContentPane
        introText="Intro lorem ipsum"
        askText="Ask lorem ipsum"
        solutionText="Solution lorem ipsum"
      />
      <CaseStudySummaryPane
        summaryText="Summary lorem ipsum"
        src={require('./images/batteryxt-summary.jpg')}
        alt="screenshot"
      />
      <CaseStudyResultsPane {...CaseStudyResultsResultsProps} />
      <CaseStudyBottomNav {...caseStudyBottomNavProps} />
    </Layout>
  );
};
