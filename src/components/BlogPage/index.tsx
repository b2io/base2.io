import type { FC } from 'react';

import { Layout } from '~/components';

export const BlogPage: FC = () => {
  return (
    <Layout
      description="Check out our blog to read some of our staffs' takes and helpful tips on web developent topics and trends."
      title="Blog"
    >
      <h1>hello from the blog page</h1>
    </Layout>
  );
};
