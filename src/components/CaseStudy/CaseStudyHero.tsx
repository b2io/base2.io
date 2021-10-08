import { css } from '@emotion/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import type { FC } from 'react';

type CaseStudyHeroProps = NextImageProps & {
  alt: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
};

export const CaseStudyHero: FC<CaseStudyHeroProps> = ({ src, alt }) => {
  return (
    <NextImage
      alt={alt}
      layout="responsive"
      src={src}
      css={css`
        div {
          z-index: 2;
        }
      `}
    />
  );
};