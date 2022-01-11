import type { FC } from 'react';

import {
  CaseStudyHeaderPane,
  CaseStudyResultsPane,
  Layout,
} from '~/components';

export const BatteryXTPage: FC = () => {
  // TODO: Add description for BatteryXTPage.
  const CaseStudyResultsResultsProps = {
    children: [
      {
        heading: 'Generate inbound leads',
        text: 'Serves as a lead generator for DNV GL to capture information on potential clients ',
      },
      {
        heading: 'Boosts marketing efforts ',
        text: 'Helps the DNV GL marketing team demonstrate their BatteryXT product in digital campaigns and at trade shows worldwide ',
      },
      {
        heading: 'Simplifies a complex software',
        text: 'Provides consumers quick and easy insight into an otherwise technical softwar',
      },
      {
        heading: 'Promotes clean energy',
        text: 'Demonstrates the rich possibilities of battery energy, a cleaner alternative to fossil fuels ',
      },
    ],
    resultsParagraph:
      'By breaking down a complicated software into a bite-size application, we’ve provided DNV GL with a versatile marketing tool. Since its completion, the demo has helped the company generate leads, convert prospects into clients, and communicate the merit of BatteryXT to stakeholders across the world.',
  };

  return (
    <Layout description="" title="BatteryXT">
      <CaseStudyHeaderPane
        alt="BatteryXT"
        client="BatteryXT"
        src={require('./images/batteryxt-hero.jpg')}
      />
      <CaseStudyResultsPane {...CaseStudyResultsResultsProps} />
    </Layout>
  );
};
