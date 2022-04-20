import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { PositionPage } from '~/components/PositionPage';

const PositionNextPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <PositionPage />;
};

export default PositionNextPage;
