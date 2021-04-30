import { FC } from 'react';
import { Heading } from '~/components';
import { bp } from '~/theme/breakpoints';

// TODO: move this to types folder
type HeroImageProps = {
  alt: string;
  data: Array<{ srcSet: string }>;
};

type PageHeroProps = HeroImageProps & {
  text: string;
};

let filteredBreakpoints = [];

const Image: FC<HeroImageProps> = ({ alt, data }) => {
  // console.log(filteredBreakpoints);
  filteredBreakpoints = Object.values(bp)
    .filter(
      (item) => item === 0 || item === 768 || item === 1200 || item === 1600,
    )
    .reverse();

  const sourceTag = data.map((item, index) => (
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

export const PageHero: FC<PageHeroProps> = ({ alt, data, text }) => {
  return (
    <section>
      <Image alt={alt} data={data} />
      <Heading as="h1">{text}</Heading>
    </section>
  );
};
