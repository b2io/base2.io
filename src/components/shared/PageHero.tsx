import { FC } from 'react';
import { Heading } from '~/components';

// TODO: move this to types folder
type PageHeroProps = {
  text: string;
};

export const PageHero: FC<PageHeroProps> = ({ text }) => {
  return (
    <section>
      <Heading as="h1">{text}</Heading>
    </section>
  );
};
