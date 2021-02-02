import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { CaseStudy, listCaseStudies } from '~/cms';
import { Layout } from '~/components';

export type WorkIndexPageProps = {
  caseStudies: CaseStudy[];
};

const WorkIndexPage: NextPage<WorkIndexPageProps> = ({ caseStudies }) => {
  return (
    <Layout title="Work">
      <h1>Unique challenges require unique solutions.</h1>
      <ul>
        {caseStudies.map((caseStudy) => (
          <li key={caseStudy.id}>
            <Link href={`/work/${caseStudy.slug.join('/')}`}>
              <a>{caseStudy.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<WorkIndexPageProps> = async () => {
  const caseStudies = await listCaseStudies();

  return { props: { caseStudies } };
};

export default WorkIndexPage;
