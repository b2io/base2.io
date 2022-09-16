import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { FC } from 'react';

import { atMinLg, atMinXL } from '~/theme';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: -18em 1em 0 1em;

  ${atMinLg} {
    margin-top: -18em;
    max-width: 100%;
    justify-content: center;
    align-items: center;
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

        ${atMinXL} {
          padding: 3rem 0;

          &:nth-of-type(odd) {
            align-self: end;
            width: 75%;
          }

          &:nth-of-type(even) {
            align-self: start;
            width: 75%;
          }
        }
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
