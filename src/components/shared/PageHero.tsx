import { FC } from 'react';

// TODO: move this to types folder
type PageHeroProps = {
  text: string;
};

export const PageHero: FC<PageHeroProps> = ({ text }) => {
  return (
    <section>
      <div>{text}</div>
    </section>
  );
};
