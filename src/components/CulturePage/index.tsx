import React, { FC } from 'react';
import { Layout, PageHero } from '~/components';

const heroImageSource = {
  largeDesktop: '/approach/approach-hero-xlarge.jpg',
  tablet: '/approach/approach-hero-medium.jpg',
  xl: '/approach/approach-hero-large.jpg',
  xs: '/approach/approach-hero-small.jpg',
};

export const CulturePage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at a computer"
        imgSource={heroImageSource}
        text="We are engineers and artisans, collaborating to make custom software people love."
      />
    </Layout>
  );
};
