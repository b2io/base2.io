import styled from '@emotion/styled';
import type { FC } from 'react';

import type { ImageProps } from '~/types';

const HeroImage = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const CaseStudyHeroImage: FC<ImageProps> = ({ alt, src }) => {
  return <HeroImage alt={alt} src={src} />;
};
