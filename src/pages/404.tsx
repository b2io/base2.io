import { NextPage } from 'next';

import { Layout } from '~/components';

const NotFoundPage: NextPage = () => {
  return (
    <Layout title="Not Found">
      <h1>404</h1>
    </Layout>
  );
};

export default NotFoundPage;
