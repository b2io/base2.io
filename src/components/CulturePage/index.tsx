import React, { FC } from 'react';
import { Layout, PageHero, TeamCardList, TeamHero } from '~/components';

const heroImageSource = {
  largeDesktop: '/culture/culture-hero-xlarge.jpg',
  tablet: '/culture/culture-hero-medium.jpg',
  xl: '/culture/culture-hero-large.jpg',
  xs: '/culture/culture-hero-small.jpg',
};

const teamHeroImageSource = {
  largeDesktop: '/culture/team-hero/culture-ourteam-xlarge.jpg',
  tablet: '/culture/team-hero/culture-ourteam-medium.jpg',
  xl: '/culture/team-hero/culture-ourteam-large.jpg',
  xs: '/culture/team-hero/culture-ourteam-small.jpg',
};

export const CulturePage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="people sitting around conference table collaborating"
        imgSource={heroImageSource}
        text="We are engineers and artisans, collaborat&shy;ing to make custom software people love."
      />
      <TeamHero
        alt="people sitting around conference table collaborating"
        imgSource={teamHeroImageSource}
        text="Our team"
      />
      <TeamCardList />
    </Layout>
  );
};
