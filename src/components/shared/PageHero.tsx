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
    ([breakpointNameA], [breakpointNameB]) => {
      return bp[breakpointNameB] - bp[breakpointNameA];
    },
  );

  return (
    <picture>
      {sortedImgSourcesDescending.map(([breakpointName, imgSource]) => {
        return (
          <source
            key={breakpointName}
            media={`(min-width: ${bp[breakpointName]}px)`}
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
