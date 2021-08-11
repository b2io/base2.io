import type { NextPage } from 'next';

import { Layout } from '~/components';

const NotFoundNextPage: NextPage = () => {
  // TODO: Add description for NotFoundPage.
  return (
    <Layout description="" noindex title="Not Found">
      <h1>404</h1>
    </Layout>
  );
};

export default NotFoundNextPage;
