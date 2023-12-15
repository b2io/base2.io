import { css } from '@emotion/react';
import { ImageProps as NextImageProps, StaticImageData } from 'next/image';
import type { FC, ReactNode } from 'react';

import { Heading } from '~/components';
import { atMaxMd, atMaxSm, atMinSm } from '~/theme';

import { CaseStudyHero } from './CaseStudyHero';

type CaseStudyProps = NextImageProps & {
  name: string | ReactNode;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
  alt: string;
};

export const CaseStudyHeaderPane: FC<CaseStudyProps> = ({ alt, name, src }) => {
  return (
    <section>
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

          ${atMinSm} {
            top: 1.5 rem;
            line-height: 4.5rem;
          }

          ${atMaxSm} {
            font-size: 3rem;
          }
        `}
      >
        {name}
      </Heading>

      <CaseStudyHero alt={alt} src={src} />
    </section>
  );
};
