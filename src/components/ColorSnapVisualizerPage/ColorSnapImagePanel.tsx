import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { FC } from 'react';

import { atMinXL } from '~/theme';

const ImageContainer = styled.div`
  height: 100%;
  justify-content: center;
  position: relative;
  width: 14.375rem;

  ${atMinXL} {
    height: 100%;
    width: 20.625rem;
  }
`;

type ImagePanelItemProps = {
  alt: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
};

const ImagePanelItem: FC<ImagePanelItemProps> = ({ src, alt }) => {
  return (
    <div>
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
          src={require('./images/colorsnap-samples/cs1_sample.png')}
        />
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
          src={require('./images/colorsnap-samples/cs4_sample.png')}
        />
        <ImagePanelItem
          alt="image"
          src={require('./images/colorsnap-samples/cs5_sample.png')}
        />
        <ImagePanelItem
          alt="image"
          src={require('./images/colorsnap-samples/cs6_sample.png')}
        />
      </ImageContainer>
    </section>
  );
};
