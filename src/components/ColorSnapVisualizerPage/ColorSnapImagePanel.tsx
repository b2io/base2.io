import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { FC } from 'react';

import { atMinDesktop, atMinLg, atMinXL, atMinXXL } from '~/theme';

const ImageContainer = styled.div`
  display: inline-block;
  height: 100%;
  margin: -18em 1em 0 1em;

  ${atMinLg} {
    margin-top: -18em;
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
        display: inline-block;
        position: relative;

        ${atMinLg} {
          padding: 3rem 0;
          width: 85%;

          &:nth-of-type(odd) {
            right: calc(40% - 50vw) !important;
          }

          &:nth-of-type(even) {
            right: calc(55% - 50vw) !important;
          }
        }

        ${atMinXL} {
          padding: 3rem 0;
          width: 85%;

          &:nth-of-type(odd) {
            right: calc(42% - 50vw) !important;
          }

          &:nth-of-type(even) {
            right: calc(55% - 50vw) !important;
          }
        }

        ${atMinXXL} {
          padding: 3rem 0;
          width: 85%;

          &:nth-of-type(odd) {
            right: calc(42% - 50vw) !important;
          }

          &:nth-of-type(even) {
            right: calc(55% - 50vw) !important;
          }
        }

        ${atMinDesktop} {
          padding: 3rem 0;
          width: 85%;

          &:nth-of-type(odd) {
            right: calc(42% - 50vw) !important;
          }

          &:nth-of-type(even) {
            right: calc(68% - 50vw) !important;
          }
        }
      `}
    >
      <NextImage src={src} alt={alt} />
    </div>
  );
};

export type ColorSnapImagePanelProps = {
  alt: string;
  src: string;
};

export const ColorSnapImagePanel: FC<ColorSnapImagePanelProps> = (props) => {
  return (
    <section {...props}>
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
    </section>
  );
};
