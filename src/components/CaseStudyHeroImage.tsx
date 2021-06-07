import type { FC } from 'react';

import type { ImageProps } from '~/types';

export const CaseStudyHeroImage: FC<ImageProps> = ({ alt, src }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};
