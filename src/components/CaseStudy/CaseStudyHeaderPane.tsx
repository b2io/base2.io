import { css } from '@emotion/react';
import { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

import { Heading } from '~/components';
import { atMaxMd } from '~/theme';

import { CaseStudyHero } from './CaseStudyHero';

type CaseStudyProps = NextImageProps & {
  client: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
  alt: string;
};

export const CaseStudyHeaderPane: FC<CaseStudyProps> = ({
  alt,
  client,
  src,
}) => {
  return (
    <div>
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
    </div>
  );
};
