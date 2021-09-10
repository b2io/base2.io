import { css } from '@emotion/react';
import type { FC } from 'react';

import { Layout } from '~/components';
import { atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';

import { BuiltForResults } from './BuiltForResults';
import { DesignedForHumans } from './DesignedForHumans';
import { FeaturedCaseStudy } from './FeaturedCaseStudy';
import { FueledByCuriosity } from './FueledByCuriosity';
import { HomeHero } from './HomeHero';

export type HomePageProps = Record<string, unknown>;

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Layout
      description="Software that moves people. At Base Two, it all starts with a human touch.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu augue non nisl feugiat porta. Fusce tempus molestie orci, ac lobortis mauris molestie vel. Nunc in tortor ut justo molestie rutrum. Nulla justo elit, mattis sed euismod a, viverra sed urna. Curabitur arcu ipsum, scelerisque eu lorem nec, ultrices sollicitudin sem. Cras ac sem quis dolor porta vehicula quis a mi. Aliquam erat volutpat. Cras pharetra turpis mollis urna lobortis, sed rhoncus sem finibus. Suspendisse quis cursus eros.

Nam eget nisi vehicula, lacinia arcu at, fringilla lacus. Sed dictum non nisi vel euismod. Donec viverra ante nunc, laoreet tempor lacus."
      title="Base Two"
    >
      <HomeHero />
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
      />
    </Layout>
  );
};
