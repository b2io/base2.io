import { FC } from 'react';
import { Heading } from '~/components';
import { bp } from '~/theme/breakpoints';

// TODO: move this to types folder
type HeroImageProps = {
  alt: string;
  imgSource: Array<{ srcSet: string }>;
};

type PageHeroProps = HeroImageProps & {
  text: string;
};

let filteredBreakpoints: Array<number>;

const Image: FC<HeroImageProps> = ({ alt, imgSource }) => {
  filteredBreakpoints = Object.values(bp)
    .filter(
      (item) => item === 0 || item === 768 || item === 1200 || item === 1600,
    )
    .reverse();

  const sourceTag = imgSource.map((item, index) => (
    <source
      key={index}
      media={`(min-width: ${filteredBreakpoints[index]}px)`}
      srcSet={item.srcSet}
    />
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
