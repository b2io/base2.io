import { FC } from 'react';
import { Heading } from '~/components';
import { ImageProps } from '~/types';

// TODO: move this to types folder
type PageHeroProps = ImageProps & {
  text: string;
};

export const PageHero: FC<PageHeroProps> = ({ alt, text, src }) => {
  return (
    <section>
      <Heading as="h1">{text}</Heading>
      <img src={src} alt={alt} />
    </section>
  );
};
