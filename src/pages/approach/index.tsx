import { NextPage } from 'next';
import { Layout, PageHero, QuotedImage } from '~/components';

const heroImageSource = {
  largeDesktop: '/approach/approach-hero-xlarge.jpg',
  tablet: '/approach/approach-hero-medium.jpg',
  xl: '/approach/approach-hero-large.jpg',
  xs: '/approach/approach-hero-small.jpg',
};

const quotedImageSource = {
  desktop: '/quoted-image/approach-quote_large.jpg',
  tablet: '/quoted-image/approach-quote_medium.jpg',
  xs: '/quoted-image/approach-quote_small.jpg',
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
        alt="person standing by brick wall"
        company="Base Two"
        imgSource={quotedImageSource}
        name="Tony Borres"
        position="Director of Operations"
        quote="We follow agile, an iterative approach to software development that lets us quickly pivot when challenges arise. "
      />
    </Layout>
  );
};

export default ApproachIndexPage;
