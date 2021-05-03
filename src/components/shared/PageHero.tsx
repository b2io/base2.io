import { FC } from 'react';
import { Heading } from '~/components';
import { bp, BreakpointName } from '~/theme/breakpoints';

type HeroImageSource = {
  xs: string;
  tablet: string;
  xl: string;
  desktop: string;
};

type HeroImageProps = {
  alt: string;
  imgSource: HeroImageSource;
};

type PageHeroProps = HeroImageProps & {
  text: string;
};

const Image: FC<HeroImageProps> = ({ alt, imgSource }) => {
  const sortedImgSourcesDescending = Object.entries(imgSource).sort(
    ([breakpointA], [breakpointB]) => {
      const valueA = breakpointA as BreakpointName;
      const valueB = breakpointB as BreakpointName;
      return bp[valueB] - bp[valueA];
    },
  );

  return (
    <picture>
      {sortedImgSourcesDescending.map(([breakpointName, imgSource]) => {
        const breakpointValue = breakpointName as BreakpointName;
        return (
          <source
            key={breakpointName}
            media={`(min-width: ${bp[breakpointValue]}px)`}
            srcSet={imgSource}
          />
        );
      })}
      <img alt={alt} />
    </picture>
  );
};

export const PageHero: FC<PageHeroProps> = ({ alt, imgSource, text }) => {
  return (
    <section>
      <Image alt={alt} imgSource={imgSource} />
      <Heading as="h1">{text}</Heading>
    </section>
  );
};
