import { FC } from 'react';

import { bp, BreakpointName } from '~/theme';
import { ImageProps } from '../types';

export const ImageContainer: FC<ImageProps> = ({ alt, src, ...props }) => {
  const sortedImgSourcesDescending = Object.entries(src).sort(
    ([breakpointA], [breakpointB]) => {
      const keyA = breakpointA as BreakpointName;
      const keyB = breakpointB as BreakpointName;
      return bp[keyB] - bp[keyA];
    },
  );

  return (
    <picture {...props}>
      {sortedImgSourcesDescending.map(([breakpointName, src]) => {
        const breakpointValue = breakpointName as BreakpointName;
        return (
          <source
            key={breakpointName}
            media={`(min-width: ${bp[breakpointValue]}px)`}
            srcSet={src}
          />
        );
      })}
      <img alt={alt} />
    </picture>
  );
};
