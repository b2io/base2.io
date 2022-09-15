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
  TechCard,
  TechListGrid,
} from '~/components';
import {
  atMinDesktop,
  atMinSm,
  atMinTablet,
  atMinXXL,
  cssClamp,
  spacing,
} from '~/theme';

import { batteryXtNav, flyNetJetsNav } from '../CaseStudy/navProps';

export const ColorSnapVisualizerPage: FC = () => {
  const CaseStudyResultsProps = {
    resultsParagraph:
      'ColorSnap® Visualizer for Web didn’t just set a new standard for customer engagement in the paint industry—it also modernized an age-old process. Instead of buying paint samples at the store and manually applying them to walls, customers can now trial new paints in seconds.',
  };

  const caseStudyBottomNavProps = {
    children: [flyNetJetsNav, batteryXtNav],
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
            <sup
              css={css`
                font-size: 1.5rem;
                top: -1rem;

                ${atMinTablet} {
                  font-size: 2rem;
                  top: -2rem;
                }
                ${atMinXXL} {
                  font-size: 2.5rem;
                }
              `}
            >
              &reg;
            </sup>
          </>
        }
        src={require('./images/colorsnap-hero.jpg')}
      />
      <TechListGrid
        css={css`
          margin-top: ${spacing.sm};
        `}
      >
        <TechCard logo="angular" />
        <TechCard logo="sass" />
        <TechCard logo="jasmine" />
        <TechCard logo="karma" />
      </TechListGrid>
      <CaseStudyIntroContentPane
        introText={
          <>
            Sherwin-Williams wanted customers to easily visualize exciting new
            paint colors on their walls. We created ColorSnap
            <sup
              css={css`
                font-size: '2px';

                ${atMinTablet} {
                  font-size: '.5em';
                }
              `}
            >
              ®
            </sup>{' '}
            Visualizer for Web, an application that enables users to virtually
            transform their space with any Sherwin-Williams color.
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
          alt="Jet"
          layout="responsive"
          src={require('./images/colorsnap-full-width.jpg')}
        />
      </section>
      <CaseStudySummaryPane
        summaryText="The app lets customers effortlessly browse Sherwin-Williams’ digital paint collection, curate color schemes,
        generate paint suggestions from their favorite images, and digitally paint their physical spaces."
        src={require('./images/colorsnap-screenshot.jpg')}
        alt="screenshot"
      />
      <CaseStudyResultsPane {...CaseStudyResultsProps} />
      <ColorSnapImagePanel />
      <QuotedImage
        alt="people looking at computer"
        company="Sherwin Williams"
        css={css`
          margin-top: ${cssClamp([12.5, 'mobile'], [17.313, 'desktop'])};
        `}
        imgSources={[
          ['tablet', '/work/colorsnap-quote_medium.jpg'],
          ['xl', '/work/colorsnap-quote_large.jpg'],
          ['xs', '/work/colorsnap-quote_small.jpg'],
        ]}
        name="James Weaver"
        position="Project Manager"
        quote="Best group of developers. Amazing front end and back end skills! Great partners to work with!"
      />
      <CaseStudyBottomNav {...caseStudyBottomNavProps} />
    </Layout>
  );
};
