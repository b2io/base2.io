import { NextPage } from 'next';

import { Layout, Heading, Text } from '~/components';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Heading as="h1" variant="hero">
        Hero
      </Heading>
      <Heading as="h1" variant="h1">
        H1
      </Heading>
      <Heading as="h2" variant="h2">
        H2
      </Heading>
      <Heading as="h3" variant="h3">
        H3
      </Heading>
      <Text variant="body">Body</Text>
      <Text variant="CTA">CTA</Text>
    </Layout>
  );
};

export default HomePage;
