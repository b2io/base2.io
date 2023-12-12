import { css } from '@emotion/react';
import NextImage, {
  ImageProps as NextImageProps,
  StaticImageData,
} from "next/legacy/image";
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
        filter: opacity(65%);
        div {
          z-index: 2;
        }
      `}
    />
  );
};
