import { NextPage } from 'next';
import { Layout, TeamMemberCard } from '~/components';

const CultureIndexPage: NextPage = () => {
  return (
    <Layout title="Culture">
      <h1>Hello from the Culture page</h1>
      <TeamMemberCard />
    </Layout>
  );
};

export default CultureIndexPage;
