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

export const ScopeBuilderPage: FC = () => {
  const CaseStudyResultsProps = {
    children: [
      {
        heading: '1300+ satisfied users',
        text: 'Serving hundreds of internal employees and outside contractors across AEP’s Transmission unit',
      },
      {
        heading: 'Standardized an inconsistent process',
        text: 'Countless hours saved by replacing individualized siloed spreadsheets with a consistent, streamlined scoping process',
      },
      {
        heading: 'Sustained and lasting ROI',
        text: 'Built-in reporting capabilities have helped AEP better understand past and projected expenses to maximize future savings',
      },
      {
        heading: 'Partnership for the long run',
        text: 'We’ve worked closely with AEP since the initial inception, serving as an external knowledge base and expanding the app to accommodate new teams',
      },
    ],
    resultsParagraph:
      'ScopeBuilder has transformed daily life for many AEP employees, providing them with streamlined data, while unifying disparate teams around focused processes. The result is a powerful solution that’s saved our client immeasurable time and money—and provided valuable new insight into company operations.',
  };

  const caseStudyBottomNavProps = {
    children: [
      {
        company: 'DNV',
        imagePath: '/work/net-jets.jpg',
        navPath: '/work/batteryxt',
        title: 'Battery XT',
      },
      {
        company: 'NetJets',
        imagePath: '/work/net-jets.jpg',
        navPath: '/work/netjets',
        title: 'Fly NetJets',
      },
    ],
  };

  return (
    <Layout description="Case study about ScopeBuilder" title="ScopeBuilder">
      <CaseStudyHeaderPane
        alt="ScopeBuilder"
        client="ScopeBuilder"
        src={require('./images/scopebuilder-hero.jpg')}
      />
      <TechListGrid
        css={css`
          margin-top: ${spacing.sm};
        `}
      >
        <TechCard logo="react" />
        <TechCard logo="net" />
      </TechListGrid>
      <CaseStudyIntroContentPane
        introText="American Electric Power (AEP) needed an easy, standardized way to capture
        and report on the variable costs and details of capital-intensive power station and
        power transmission upgrades across the country. Our solution: user-friendly software
        that prompts the user for relevant inputs, guides them through an approval process,
        and stores data for reporting and future use."
        askText="With the responsibility of supplying power to 5.5 million people across 11 states,
        leading energy company AEP needed to streamline the estimation process for multimillion-dollar
        power station renovations. The company called on Base Two to assist."
        solutionText="After a deep dive to learn about the scoping processes used by team members across
        AEP, we helped them define a single company-wide scoping strategy. Then, working with stakeholders
        at the company, we built a custom software solution for that strategy. In 2012, we launched an app
        called ScopeBuilder for AEP’s Protection and Control Engineering team. We then expanded the software
        across an entire division, deploying for hundreds of employees."
      />
      <CaseStudySummaryPane
        summaryText="After logging into ScopeBuilder, employees can access a high-level dashboard that
        showcases all relevant projects—along with progress on each. From here, they’re able to complete
        scoping checklists and questionnaires, add attachments, select building materials and equipment,
        and route proposals to their supervisors for approval."
        src={require('./images/aep-logo.svg')}
        alt="screenshot"
      />
      <CaseStudyResultsPane {...CaseStudyResultsProps} />
      <CaseStudyBottomNav {...caseStudyBottomNavProps} />
    </Layout>
  );
};
