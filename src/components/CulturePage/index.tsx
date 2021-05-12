import React, { FC } from 'react';
import { Layout, PageHero, TeamMemberCard } from '~/components';

const heroImageSource = {
  largeDesktop: '/culture/culture-hero-xlarge.jpg',
  tablet: '/culture/culture-hero-medium.jpg',
  xl: '/culture/culture-hero-large.jpg',
  xs: '/culture/culture-hero-small.jpg',
};

const team = [
  {
    name: 'Drew Miller',
    position: 'Owner & Principal Software Engineer',
    src: '/culture/dmiller.jpg',
  },
];

export const CulturePage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="people sitting around conference table collaborating"
        imgSource={heroImageSource}
        text="We are engineers and artisans, collaborating to make custom software people love."
      />
      <TeamMemberCard
        alt={team[0].name}
        name={team[0].name}
        position={team[0].position}
        src={team[0].src}
      />
    </Layout>
  );
};
