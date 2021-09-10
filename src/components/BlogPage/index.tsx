import type { FC } from 'react';

import { Layout } from '~/components';

export const BlogPage: FC = () => {
  return (
    <Layout
      description="Get tips and insights on current web trends, code best practices and more from the Base Two staff."
      title="Blog"
    >
      <h1>hello from the blog page</h1>
    </Layout>
  );
};
