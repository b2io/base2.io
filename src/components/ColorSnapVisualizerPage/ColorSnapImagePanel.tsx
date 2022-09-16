import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { FC } from 'react';

import {
  atMinDesktop,
  atMinLg,
  atMinTablet,
  atMinXL,
  atMinXXL,
  cssClamp,
} from '~/theme';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: -18em 1em 0 1em;
  border: 4px pink solid;

  /* ${atMinTablet} {
    width: ${cssClamp([34.313, 'tablet'], [64.5, 'desktop'])};
  } */

  ${atMinLg} {
    margin-top: -18em;
    max-width: 100%;
  }
`;

type ImagePanelItemProps = {
  alt: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
};

const ImagePanelItem: FC<ImagePanelItemProps> = ({ src, alt }) => {
  return (
    <div
      css={css`
        padding: 1rem 0;
        display: flex;
        justify-content: center;
        align-items: center;

        ${atMinLg} {
          padding: 3rem 0;
          &:nth-of-type(odd) {
            border: 2px solid red;
            margin-left: 25em;
            width: 50%;
          }

          &:nth-of-type(even) {
            align-items: flex-start;
            margin-right: 25em;
            width: 50%;
          }
        }

        ${atMinXL} {
          padding: 3rem 0;

          &:nth-of-type(odd) {
            align-items: flex-end !important;
            border: 2px solid red;
          }

          &:nth-of-type(even) {
            align-items: flex-start;
          }
        }
        /* 
        ${atMinXXL} {
          padding: 3rem 0;
          width: 85%;

          &:nth-of-type(odd) {
            right: calc(42% - 50vw) !important;
          }

          &:nth-of-type(even) {
            left: calc(70% - 50vw) !important;
          }
        }

        ${atMinDesktop} {
          padding: 3rem 0;
          width: 85%;

          &:nth-of-type(odd) {
            right: calc(42% - 50vw) !important;
          }

          &:nth-of-type(even) {
            left: calc(115% - 50vw) !important;
          }
        } */
      `}
    >
      <NextImage src={src} alt={alt} />
    </div>
  );
};

export type ColorSnapImagePanelProps = {
  alt?: string;
  src?: string;
};

export const ColorSnapImagePanel: FC<ColorSnapImagePanelProps> = () => {
  return (
    <ImageContainer>
      <ImagePanelItem
        alt="image"
        src={require('./images/colorsnap-samples/cs2_sample.png')}
      />
      <ImagePanelItem
        alt="image"
        src={require('./images/colorsnap-samples/cs3_sample.png')}
      />
      <ImagePanelItem
        alt="image"
        src={require('./images/colorsnap-samples/cs6_sample.png')}
      />
    </ImageContainer>
  );
};
