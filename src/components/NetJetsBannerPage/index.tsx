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
  QuotedImage,
  TechCard,
  TechListGrid,
} from '~/components';
import {
  atMinDesktop,
  atMinTablet,
  atMinXXL,
  cssClamp,
  spacing,
} from '~/theme';

import { batteryXtNav, flyNetJetsNav } from '../CaseStudy/navProps';

export const NetJetsBannersPage: FC = () => {
  const CaseStudyResultsProps = {
    resultsParagraph:
      'A reliable partner will be able to work with your current team to take a project over the finish line. We’re proud to have been that partner for NetJets, and we’re ready to be that partner for you.',
  };

  const caseStudyBottomNavProps = {
    children: [flyNetJetsNav, batteryXtNav],
  };

  return (
    <Layout
      description="Case study about Net Jets Web Banners"
      title="NetJets Web Banners"
    >
      <CaseStudyHeaderPane
        alt="NetJets Web Banners"
        name="NetJets Web Banners"
        src={require('./images/colorsnap-hero.jpg')}
      />
      <TechListGrid
        css={css`
          margin-top: ${spacing.sm};
        `}
      >
        <TechCard logo="html5" />
        <TechCard logo="css" />
        <TechCard logo="javascript" />
        <TechCard logo="python" />
      </TechListGrid>
      <CaseStudyIntroContentPane
        introText={
          <>
            Our collaboration with NetJets’ Marketing Team is a comprehensive
            blend of their creative vision and our technical expertise.
          </>
        }
        askText="NetJets approached us to create marketing banners as they struggled to find a dependable technical partner capable of transforming their creative vision into high-quality, optimized banners. This led them to seek our proven expertise in the field.

        NetJets is a longtime partner of ours, and when they asked us for help to create their marketing web banners, we eagerly accepted the challenge."
        solutionText="The NetJets team creates their vision, and we bring it to life. Over the past 6 years, we’ve crafted hundreds of web-optimized marketing banners featuring captivating text and graphic animations. Collaborating with their translation experts, we've rendered these sets into five languages to bolster their European outreach.  Our dedication to delivering high-quality, visually compelling web banners reflects our commitment to supporting NetJets in achieving their marketing objectives."
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
        summaryText="These marketing banners captivate viewers with dynamic SVG elements and seamless copy transitions. They communicate the NetJets’ brand message, and drive online traffic to their sites."
        src={require('./images/colorsnap-screenshot.jpg')}
        alt="screenshot"
      />
      <CaseStudyResultsPane {...CaseStudyResultsProps} />
      {/* <QuotedImage
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
      /> */}
      <CaseStudyBottomNav {...caseStudyBottomNavProps} />
    </Layout>
  );
};
