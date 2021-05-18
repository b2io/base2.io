import { FC } from 'react';
import { bp, BreakpointName } from '~/theme';

type BpStringPair = [BreakpointName, string];

export type DynamicImageContainerProps = {
  alt: string;
  imgSources: BpStringPair[];
};

export const DynamicImageContainer: FC<DynamicImageContainerProps> = ({
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
