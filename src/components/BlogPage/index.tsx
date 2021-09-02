import type { FC } from 'react';

import { Layout } from '~/components';

export const BlogPage: FC = () => {
  return (
    <Layout description="Blog" title="Blog">
      <h1>hello from the blog page</h1>
    </Layout>
  );
};
