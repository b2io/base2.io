import { css } from '@emotion/react';
import { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

import { Heading } from '~/components';
import { atMaxMd, atMinSm } from '~/theme';

import { CaseStudyHero } from './CaseStudyHero';

type CaseStudyProps = NextImageProps & {
  name: string;
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
            line-height: .6;
          }
        `}
      >
        {name}
      </Heading>

      <CaseStudyHero alt={alt} src={src} />
    </section>
  );
};
