import { FC } from 'react';
import { Layout } from '~/components';
import { spacing } from '~/theme/spacing';
import { css } from '@emotion/react';
import { atMinTablet, atMinXL, cssClamp } from '~/theme';

import { BuiltForResults } from './BuiltForResults';
import { DesignedForHumans } from './DesignedForHumans';
import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
import { HomeHero } from './HomeHero';

export const HomePage: FC = () => {
  return (
    <Layout>
      <HomeHero
        css={css`
          margin-bottom: ${cssClamp([10.5, 'mobile'], [1.5, 'desktop'])};
        `}
      />
      <DesignedForHumans
        css={css`
          margin-bottom: ${cssClamp([12.5, 'mobile'], [16.5, 'desktop'])};
        `}
      />
      <BuiltForResults
        css={css`
          margin-bottom: ${cssClamp([12.5, 'mobile'], [17.5, 'tablet'])};

          ${atMinXL} {
            margin-bottom: ${spacing.xxl};
          }
        `}
      />
      <FeaturedCaseStudy
        css={css`
          margin-bottom: ${spacing.xxl5};

          ${atMinTablet} {
            margin-bottom: -${spacing.xxl2};
          }

          ${atMinXL} {
            margin-bottom: ${spacing.xxl};
          }
        `}
      />
      <FueledByCuriosity />
    </Layout>
  );
};
