import { FC } from 'react';
import { Heading } from '~/components';
import { ImageProps } from '~/types';
import Image from 'next/image';

// TODO: move this to types folder
type PageHeroProps = ImageProps & {
  text: string;
};

export const PageHero: FC<PageHeroProps> = ({ alt, text, src }) => {
  return (
    <section>
      <Heading as="h1">{text}</Heading>
      {/* <img src={src} alt={alt} /> */}
      <Image layout="fill" alt={alt} src={src} />
    </section>
  );
};
