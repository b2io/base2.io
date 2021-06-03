// import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout } from '~/components';
// import { atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';

// import { BuiltForResults } from '../HomePage/BuiltForResults';
// import { DesignedForHumans } from '../HomePage/DesignedForHumans';
// import { FeaturedCaseStudy } from '../HomePage/FeaturedCaseStudy';
// import { FueledByCuriosity } from '../HomePage/FueledByCuriosity';
// import { HomeHero } from '../HomePage/HomeHero';

export const ContactPage: FC = () => {
  return (
    <Layout>
      <h1>contact</h1>
      {/* <HomeHero />
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
      /> */}
    </Layout>
  );
};
