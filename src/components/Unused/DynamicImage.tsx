import type { FC } from 'react';

import { bp } from '~/theme';
import { BpMapPair } from '~/types';

export type DynamicImageProps = {
  alt: string;
  imgSources: BpMapPair<string>[];
};

// unused!
export const DynamicImage: FC<DynamicImageProps> = ({
  alt,
  imgSources,
  ...props
}) => {
  const sortedImgSourcesDescending = imgSources.sort(
    ([breakpointA], [breakpointB]) => bp[breakpointB] - bp[breakpointA],
  );

  return (
    <picture {...props}>
      {sortedImgSourcesDescending.map(([breakpointName, src]) => (
        <source
          key={breakpointName}
          media={`(min-width: ${bp[breakpointName]}px)`}
          srcSet={src}
        />
      ))}
      <img alt={alt} />
    </picture>
  );
};
