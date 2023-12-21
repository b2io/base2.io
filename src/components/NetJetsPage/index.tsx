import { css } from '@emotion/react';
import NextImage from 'next/image';
import type { FC } from 'react';

import {
  CaseStudyBottomNav,
  CaseStudyHeaderPane,
  CaseStudyIntroContentPane,
  CaseStudyResultsPane,
  CaseStudySummaryPane,
  Layout,
} from '~/components';
import { atMinDesktop, spacing } from '~/theme';

import { flyNetJetsNav } from '../CaseStudy/navProps';

export const NetJetsPage: FC = () => {
  const CaseStudyResultsProps = {
    children: [
      {
        heading: 'Increased app relevance',
        text: 'Recent increase in Fly NetJets downloads',
      },
      {
        heading: '4.1 star rating',
        text: 'Rated 4.1 stars on the Apple App Store by users',
      },
      {
        heading: 'Expedited booking process',
        text: 'Reducing bottlenecks at the NetJets call center',
      },
      {
        heading: 'Valuable partnership',
        text: 'Fly NetJets laid the groundwork for ongoing collaboration with the company, including an expansion of app features',
      },
    ],
    resultsParagraph:
      'Since its launch in 2019, the app has allowed countless NetJets clients to fly with first-class comforts and book their trip in ultimate luxury, delivering on the company’s promise of high-end services and peace of mind.',
  };

  const caseStudyBottomNavProps = {
    currentCaseStudy: flyNetJetsNav,
  };

  return (
    <Layout description="Case study about NetJets" title="Netjets">
      <CaseStudyHeaderPane
        alt="NetJets"
        name="Fly Netjets"
        src={require('./images/netjets-hero.jpg')}
      />
      <CaseStudyIntroContentPane
        introText="With its wide range of highly personalized, upscale flight services,
        NetJets offers luxury clients the moon. One indulgence was missing,
        though: a sleek mobile app that lets them book flights, access
        high-speed internet from midair, and even control cabin temperature at
        the touch of a button."
        askText="When NetJets’ call center became overloaded with booking traffic, they
        realized a user-friendly app could reduce congestion and give customers more
        control over their flying experience. To lift the idea off the ground, the private
        jet charter company hired Base Two."
        solutionText="Although NetJets had an existing mobile app, it was only compatible
        with iOS and didn’t serve much functional purpose. In less time and with a smaller
        budget than the original iOS build, our team created a new app that catered to both
        Android and iPhone users. The result was Fly NetJets, a React Native app that makes
        flight bookings easy and elegant."
      />
      <section
        css={css`
          margin: 0 calc(50% - 50vw);

          ${atMinDesktop} {
            margin: 0 -${spacing.xxl1};
          }
        `}
      >
        <NextImage
          alt="Jet"
          css={css`
            height: auto;
            width: 100%;
          `}
          src={require('./images/netjets-full-width.jpg')}
        />
      </section>
      <CaseStudySummaryPane
        summaryText="Fly NetJets lets clients manage their accounts, book upcoming trips, and 
        fully control their in-flight experience. Behind the scenes, a number of systems communicate 
        to make this all possible, from a shared data layer supporting mobile and web interfaces to 
        constantly changing updates on aircraft availability."
        src={require('./images/netjets-screenshot.jpg')}
        alt="screenshot"
      />
      <CaseStudyResultsPane {...CaseStudyResultsProps} />
      <CaseStudyBottomNav {...caseStudyBottomNavProps} />
    </Layout>
  );
};
