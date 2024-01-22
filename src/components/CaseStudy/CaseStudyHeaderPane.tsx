import { css } from '@emotion/react';
import { ImageProps as NextImageProps, StaticImageData } from 'next/image';
import type { FC, ReactNode } from 'react';

import { Heading } from '~/components';
import { spacing } from '~/theme';

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
        variant="pageHero"
        css={css`
          margin-bottom: -${spacing.sm};
          position: relative;
          z-index: 2;
        `}
      >
        {name}
      </Heading>

      <CaseStudyHero alt={alt} src={src} />
    </section>
  );
};
