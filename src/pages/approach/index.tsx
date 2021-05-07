import { NextPage } from 'next';
import { Layout, PageHero, QuotedImage } from '~/components';

const heroImageSource = {
  largeDesktop: '/approach/approach-hero-xlarge.jpg',
  tablet: '/approach/approach-hero-medium.jpg',
  xl: '/approach/approach-hero-large.jpg',
  xs: '/approach/approach-hero-small.jpg',
};

const ApproachIndexPage: NextPage = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at a computer"
        imgSource={heroImageSource}
        text="People motivate what we do and how we do it"
      />
      <QuotedImage
        company="company text here"
        name="name text here"
        position="position text here"
        text="text text here"
      />
    </Layout>
  );
};

export default ApproachIndexPage;
