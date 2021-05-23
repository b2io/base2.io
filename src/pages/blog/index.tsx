import type { NextPage } from 'next';

import { Layout } from '~/components';

const BlogIndexPage: NextPage = () => {
  return (
    <Layout title="Blog">
      <h1>Hello from the Blog page</h1>
    </Layout>
  );
};

export default BlogIndexPage;
