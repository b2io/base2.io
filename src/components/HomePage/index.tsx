import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import type { ComponentProps, FC, JSXElementConstructor } from 'react';

import { Layout } from '~/components';
import { atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';

import type { BuiltForResults } from './BuiltForResults';
import type { DesignedForHumans } from './DesignedForHumans';
import type { FeaturedCaseStudy } from './FeaturedCaseStudy';
import type { FueledByCuriosity } from './FueledByCuriosity';
import type { HomeHero } from './HomeHero';

type Dynamic<T extends JSXElementConstructor<any>> =
  JSX.LibraryManagedAttributes<T, ComponentProps<T>>;

const DynamicBuiltForResults = dynamic<Dynamic<typeof BuiltForResults>>(() =>
  import('./BuiltForResults').then((m) => m.BuiltForResults),
);

const DynamicDesignedForHumans = dynamic<Dynamic<typeof DesignedForHumans>>(
  () => import('./DesignedForHumans').then((m) => m.DesignedForHumans),
);

const DynamicFeaturedCaseStudy = dynamic<Dynamic<typeof FeaturedCaseStudy>>(
  () => import('./FeaturedCaseStudy').then((m) => m.FeaturedCaseStudy),
);

const DynamicFueledByCuriosity = dynamic<Dynamic<typeof FueledByCuriosity>>(
  () => import('./FueledByCuriosity').then((m) => m.FueledByCuriosity),
);

const DynamicHomeHero = dynamic<Dynamic<typeof HomeHero>>(() =>
  import('./HomeHero').then((m) => m.HomeHero),
);

export type HomePageProps = Record<string, unknown>;

export const HomePage: FC<HomePageProps> = () => {
  return (
    <Layout
      description="Software that moves people. At Base Two, it all starts with a human touch."
      title="Base Two"
    >
      <DynamicHomeHero />
      <DynamicDesignedForHumans
        css={css`
          margin-top: ${cssClamp([10.5, 'mobile'], [1.5, 'desktop'])};
        `}
      />
      <DynamicBuiltForResults
        css={css`
          margin-top: ${cssClamp([12.5, 'mobile'], [16.5, 'desktop'])};
        `}
      />
      <DynamicFeaturedCaseStudy
        css={css`
          margin-top: ${cssClamp([12.5, 'mobile'], [17.5, 'tablet'])};

          ${atMinXL} {
            margin-top: ${spacing.xxl};
          }
        `}
      />
      <DynamicFueledByCuriosity
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
