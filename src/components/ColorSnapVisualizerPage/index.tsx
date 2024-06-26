import { css } from '@emotion/react';
import NextImage from 'next/image';
import type { FC } from 'react';

import {
  CaseStudyBottomNav,
  CaseStudyHeaderPane,
  CaseStudyIntroContentPane,
  CaseStudyResultsPane,
  CaseStudySummaryPane,
  ColorSnapImagePanel,
  Layout,
  QuotedImage,
  TrademarkSymbol,
} from '~/components';
import { atMinDesktop, cssClamp, spacing } from '~/theme';

import { colorSnapNav } from '../CaseStudy/navProps';

export const ColorSnapVisualizerPage: FC = () => {
  const CaseStudyResultsProps = {
    resultsParagraph:
      'ColorSnap® Visualizer for Web didn’t just set a new standard for customer engagement in the paint industry—it also modernized an age-old process. Instead of buying paint samples at the store and manually applying them to walls, customers can now trial new paints in seconds.',
  };

  const caseStudyBottomNavProps = {
    currentCaseStudy: colorSnapNav,
  };

  return (
    <Layout
      description="Case study about ColorSnap Visualizer"
      title="ColorSnap Visualizer"
    >
      <CaseStudyHeaderPane
        alt="ColorSnap Visualizer"
        name={
          <>
            ColorSnap Visualizer
            <TrademarkSymbol />
          </>
        }
        src={require('./images/colorsnap-hero.jpg')}
      />
      <CaseStudyIntroContentPane
        introText={
          <>
            Sherwin-Williams wanted customers to easily visualize exciting new
            paint colors on their walls. We created ColorSnap
            <TrademarkSymbol /> Visualizer for Web, an application that enables
            users to virtually transform their space with any Sherwin-Williams
            color.
          </>
        }
        askText="Sherwin-Williams knew that if their customers could effortlessly test a paint color
        in their space, they’d be inspired to pick up a brush. But as a brand new application—one that
        would have to accommodate mobile phones, computers, and the quirky Internet Explorer 10—building
        it would be a tricky endeavor. Realizing they needed a team that was comfortable navigating uncharted
        technical waters, Sherwin-Williams turned to Base Two."
        solutionText="Working closely with the Sherwin-Williams design and marketing team, our developers dove
        in. The goal was to create an application that allowed users to both virtually test colors in their
        space and immerse them in the Sherwin-Williams paint catalogue. The finished product became ColorSnap® Visualizer
        for Web, an application that elevated the painting experience to an entirely new dimension."
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
          alt="Apartment living room with large windows"
          css={css`
            height: auto;
            width: 100%;
          `}
          src={require('./images/colorsnap-full-width.jpg')}
        />
      </section>
      <CaseStudySummaryPane
        summaryText="The app lets customers effortlessly browse Sherwin&#8209;Williams’ digital paint collection, curate color schemes,
        generate paint suggestions from their favorite images, and digitally paint their physical spaces."
        src={require('./images/colorsnap-screenshot.jpg')}
        alt="phone app"
      />
      <CaseStudyResultsPane {...CaseStudyResultsProps} />
      <ColorSnapImagePanel />
      <QuotedImage
        alt="people looking at computer"
        company="Sherwin Williams"
        css={css`
          margin-top: ${cssClamp([12.5, 'mobile'], [17.313, 'desktop'])};
        `}
        src={'/work/colorsnap-quote_large.jpg'}
        imageProps={{ height: 2400, width: 2793 }}
        name="James Weaver"
        position="Project Manager"
        quote="Best group of developers. Amazing front end and back end skills! Great partners to work with!"
      />
      <CaseStudyBottomNav {...caseStudyBottomNavProps} />
    </Layout>
  );
};
