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
  const sourceTags = Object.entries(imgSource).map((item) => {
    const name = item[0] as BreakpointName;
    const value = item[1];
    return (
      <source key={name} media={`(min-width: ${bp[name]}px)`} srcSet={value} />
    );
  });
  return (
    <picture>
      {sourceTags}
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
