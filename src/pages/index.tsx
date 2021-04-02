import { NextPage } from 'next';

import { Container, CTA, Layout, Heading, Text } from '~/components';
import styled from '@emotion/styled';

const Box = styled(Container)`
  overflow-x: hidden;
`;

const HomePage: NextPage = () => {
  return (
    <Layout>
      {/* NOTE: Container intended for in section component implementation */}
      <Box>
        <Heading as="h1">Software that moves people.</Heading>
        <Text variant="h3">At Base Two, it all starts with a human touch.</Text>
        <Heading as="h2" variant="h2">
          Designed for{' '}
          <Text as="span" variant="hero">
            humans.
          </Text>
        </Heading>
        <Heading as="h2" variant="h2">
          Built for{' '}
          <Text as="span" variant="hero">
            results.
          </Text>
        </Heading>
        <Heading as="h2" variant="h2">
          Fueled by{' '}
          <Text as="span" variant="hero">
            curiosity.
          </Text>
        </Heading>
        <CTA href="/404">404</CTA>
      </Box>
    </Layout>
  );
};

export default HomePage;
