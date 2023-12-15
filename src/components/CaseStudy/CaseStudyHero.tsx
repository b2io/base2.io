import { css } from '@emotion/react';
import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData,
} from 'next/image';
import type { FC } from 'react';

type CaseStudyHeroProps = NextImageProps & {
  alt: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
};

export const CaseStudyHero: FC<CaseStudyHeroProps> = ({ src, alt }) => {
  return (
    <NextImage
      alt={alt}
      src={src}
      css={css`
        filter: opacity(65%);
        height: auto;
        width: 100%;
      `}
    />
  );
};
