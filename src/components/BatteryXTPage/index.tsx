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

import { colorSnapNav, scopeBuilderNav } from '../CaseStudy/navProps';

export const BatteryXTPage: FC = () => {
  const CaseStudyResultsResultsProps = {
    children: [
      {
        heading: 'Generates inbound leads',
        text: 'Serves as a lead generator for DNV to capture information on potential clients ',
      },
      {
        heading: 'Boosts marketing efforts ',
        text: 'Helps the DNV marketing team demonstrate their Battery XT product in digital campaigns and at trade shows worldwide ',
      },
      {
        heading: 'Simplifies a complex software',
        text: 'Provides consumers quick and easy insight into an otherwise technical software',
      },
      {
        heading: 'Promotes clean energy',
        text: 'Demonstrates the rich possibilities of battery energy, a cleaner alternative to fossil fuels ',
      },
    ],
    resultsParagraph:
      'By breaking down a complicated software into a bite-size application, we’ve provided DNV with a versatile marketing tool. Since its completion, the demo has helped the company generate leads, convert prospects into clients, and communicate the merit of Battery XT to stakeholders across the world.',
  };

  const caseStudyBottomNavProps = {
    children: [colorSnapNav, scopeBuilderNav],
  };

  return (
    <Layout description="Case study about Battery XT" title="Battery XT">
      <CaseStudyHeaderPane
        alt="Battery XT"
        name="Battery XT"
        src={require('./images/batteryxt-hero.jpg')}
      />
      <CaseStudyIntroContentPane
        introText="DNV, an international risk management group, helps people across the globe
        realize new possibilities in battery power. Base Two simplified DNV’s Battery XT software
        into an accessible demo site that still captures the product’s core value."
        askText="With Battery XT, DNV’s clients can visualize battery lifespan and maintenance
        needs across multiple applications and conditions. Built using highly technical MATLAB®
        software, Battery XT forms an imposing product. Our client wanted to contain it in an interactive
        demo, so that professionals from any background could view it on any device—and quickly understand
        its powerful benefits."
        solutionText="Distilling software that stores extensive data into a small web application is no
        easy feat. By collaborating with DNV’s marketing and engineering teams, Base Two could identify
        the software’s most important functions—while also simplifying complex industry jargon and delivering
        the desired demo version."
      />
      <CaseStudySummaryPane
        summaryText="The new Battery XT demo allows users to toggle between battery sizes, states of charge,
        and temperatures within different applications—and see how these factors affect performance. It’s
        compatible with nearly every device type and screen size, making it ideal for use on home computers
        or trade show floors."
        src={require('./images/batteryxt-summary.jpg')}
        alt="screenshot"
      />
      <CaseStudyResultsPane {...CaseStudyResultsResultsProps} />
      <CaseStudyBottomNav {...caseStudyBottomNavProps} />
    </Layout>
  );
};
