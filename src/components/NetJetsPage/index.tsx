import NextImage from 'next/image';
import type { FC } from 'react';

import {
  CaseStudyHeaderPane,
  CaseStudyIntroContentPane,
  Layout,
} from '~/components';

import { CaseStudySummaryPane } from '../CaseStudy/CaseStudySummaryPane';

export const NetJetsPage: FC = () => {
  return (
    <Layout description="Case study about NetJets" title="Netjets">
      <CaseStudyHeaderPane
        alt="NetJets"
        client="Fly Netjets"
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
      <NextImage
        alt="Jet"
        layout="responsive"
        src={require('./images/netjets-full-width.jpg')}
      />
      <CaseStudySummaryPane
        summaryText="FlyNetjets lets clients manage their accounts, book upcoming trips, and 
        fully control their in-flight experience. Behind the scenes, a number of systems communicate
        to make this all possible, from a shared data layer supporting mobile and web interfaces to 
        constantly changing updates on aircraft ability"
        src={require('./images/NJ_OP.jpg')}
        alt="screenshot"
      />
    </Layout>
  );
};
