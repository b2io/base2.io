import { FC } from 'react';
import { Heading } from '~/components';
import { bp } from '~/theme/breakpoints';

// TODO: move this to types folder
type HeroImageSource = {
  xs: string;
  tablet: string;
  xl: string;
  desktop: string;
};

// TODO: move this to types folder
type HeroImageProps = {
  alt: string;
  imgSource: HeroImageSource;
};

// TODO: move this to types folder
type PageHeroProps = HeroImageProps & {
  text: string;
};

const Image: FC<HeroImageProps> = ({ alt, imgSource }) => {
  const sourceTag = Object.entries(imgSource).map(([name, value]) => (
    <source key={name} media={`(min-width: ${bp[name]}px)`} srcSet={value} />
  ));
  return (
    <picture>
      {sourceTag}
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
