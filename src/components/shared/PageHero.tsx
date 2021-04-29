import { css } from '@emotion/react';

import { FC } from 'react';
import { Heading } from '~/components';
import { atMinTablet, cssClamp } from '~/theme';

import { ImageProps } from '~/types';
import NextImage from 'next/image';

// TODO: move this to types folder
type PageHeroProps = ImageProps & {
  text: string;
};

const largeImageHeightCalc = cssClamp([26.625, 'tablet'], [50, 'desktop']);
const imageTopCalc = cssClamp(
  [2.95, 'mobile'],
  [7, 'tablet'],
  [8.25, 'desktop'],
);

const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div
      css={css`
        height: ${cssClamp([20.188, 'mobile'], [26.625, 'tablet'])};
        left: calc(50% - 50vw - 5.8545rem);
        position: absolute;
        top: ${imageTopCalc};
        width: ${cssClamp([26.042, 'mobile'], [34.313, 'tablet'])};
        ${atMinTablet} {
          height: ${largeImageHeightCalc};
          left: max(-10rem, calc(50% - 50vw));
          width: ${cssClamp([34.313, 'tablet'], [64.5, 'desktop'])};
        }
      `}
      {...props}
    >
      <NextImage layout="fill" alt={alt} src={src} />
    </div>
  );
};

export const PageHero: FC<PageHeroProps> = ({ alt, text, src }) => {
  return (
    <section>
      <Image alt={alt} src={src} />
      <Heading as="h1">{text}</Heading>
      {/* <img src={src} alt={alt} /> */}
    </section>
  );
};
