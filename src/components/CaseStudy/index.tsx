import { css } from '@emotion/react';
import { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

import { Card, CardGrid, Heading, Layout } from '~/components';
import { atMaxMd, atMinTablet, atMinXL, spacing } from '~/theme';

import { CaseStudyHero } from './CaseStudyHero';

type CaseStudyProps = NextImageProps & {
  client: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
  alt: string;
  introText: string;
};

export const CaseStudy: FC<CaseStudyProps> = ({
  alt,
  client,
  src,
  introText,
}) => {
  return (
    <Layout description="Case study about NetJets" title="Netjets">
      <Heading
        as="h1"
        variant="h2"
        css={css`
          font-size: 5rem;
          margin-bottom: -1rem;
          margin-left: 5rem;
          position: relative;
          z-index: 2;

          ${atMaxMd} {
            font-size: 4rem;
            margin-left: 0;
          }
        `}
      >
        {client}
      </Heading>

      <CaseStudyHero alt={alt} src={src} />
      <section
        css={css`
          ${atMinXL} {
            margin-left: ${spacing.marginXl};
            margin-right: ${spacing.marginXl};
          }
        `}
      >
        <Heading
          as="h2"
          variant="h2"
          css={css`
            margin-bottom: ${spacing.xs};
            margin-top: ${spacing.xxl2};

            ${atMinTablet} {
              margin-top: ${spacing.xxl3};
            }
          `}
        >
          {introText}
        </Heading>

        <CardGrid
          css={css`
            margin-bottom: 5rem;
          `}
        >
          <Card />
        </CardGrid>
      </section>
    </Layout>
  );
};
