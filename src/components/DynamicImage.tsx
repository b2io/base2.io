import { FC } from 'react';
import { bp, BreakpointName } from '~/theme';

type BpStringPair = [BreakpointName, string];

export type DynamicImageProps = {
  alt: string;
  imgSources: BpStringPair[];
};

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
