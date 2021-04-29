import { FC } from 'react';
import { Heading } from '~/components';

// TODO: move this to types folder
type HeroImageProps = {
  alt: string;
  data: Array<{ media: string; srcSet: string }>;
};

type PageHeroProps = HeroImageProps & {
  text: string;
};

const Image: FC<HeroImageProps> = ({ alt, data }) => {
  const sourceTag = data.map((item, index) => (
    <source media={item.media} srcSet={item.srcSet} key={index} />
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
