import React, { FC } from 'react';
import { Layout, PageHero } from '~/components';

const heroImageSource = {
  largeDesktop: '/culture/culture-hero-xlarge.jpg',
  tablet: '/culture/culture-hero-medium.jpg',
  xl: '/culture/culture-hero-large.jpg',
  xs: '/culture/culture-hero-small.jpg',
};

export const CulturePage: FC = () => {
  return (
    <Layout>
      <PageHero
        alt="people sitting around conference table collaborating"
        imgSource={heroImageSource}
        text="We are engineers and artisans, collaborating to make custom software people love."
      />
    </Layout>
  );
};
