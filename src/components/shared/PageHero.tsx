// import { css } from '@emotion/react';

import { FC } from 'react';
import { Heading } from '~/components';
// import { cssClamp } from '~/theme';

// import { ImageProps } from '~/types';
// import NextImage from 'next/image';

// const largeImageHeightCalc = cssClamp([26.625, 'tablet'], [50, 'desktop']);
// const imageTopCalc = cssClamp(
//   [2.95, 'mobile'],
//   [7, 'tablet'],
//   [8.25, 'desktop'],
// );

// const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
//   return (
//     <div
//       css={css`
//         height: ${cssClamp([20.188, 'mobile'], [26.625, 'tablet'])};
//         left: calc(50% - 50vw - 5.8545rem);
//         position: absolute;
//         top: ${imageTopCalc};
//         width: ${cssClamp([26.042, 'mobile'], [34.313, 'tablet'])};
//         ${atMinTablet} {
//           height: ${largeImageHeightCalc};
//           left: max(-10rem, calc(50% - 50vw));
//           width: ${cssClamp([34.313, 'tablet'], [64.5, 'desktop'])};
//         }
//       `}
//       {...props}
//     >
//       <NextImage layout="fill" alt={alt} src={src} />
//     </div>
//   );
// };

// TODO: move this to types folder
type HeroImageProps = {
  alt: string;
  srcSet: string;
};

type PageHeroProps = HeroImageProps & {
  text: string;
};

const Image: FC<HeroImageProps> = ({ alt, srcSet }) => {
  return (
    <picture>
      <source srcSet={srcSet} />
      <img alt={alt} />
    </picture>
  );
};

export const PageHero: FC<PageHeroProps> = ({ alt, text, srcSet }) => {
  return (
    <section>
      <Image alt={alt} srcSet={srcSet} />
      <Heading as="h1">{text}</Heading>
    </section>
  );
};
