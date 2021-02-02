import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { findCaseStudyBySlug, listCaseStudies, PageParams } from '~/cms';
import { Layout } from '~/components';

export type CaseStudyTemplateProps = {
  title: string;
};

export const CaseStudyTemplate: NextPage<CaseStudyTemplateProps> = ({
  title,
}) => {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const caseStudies = await listCaseStudies();

  return {
    fallback: false,
    paths: caseStudies.map((caseStudy) => {
      return { params: { ...caseStudy } };
    }),
  };
};

export const getStaticProps: GetStaticProps<
  CaseStudyTemplateProps,
  PageParams
> = async (context) => {
  if (typeof context.params === 'undefined') {
    throw new Error('Invalid CaseStudyTemplate params');
  }

  const caseStudy = await findCaseStudyBySlug(context.params.slug);

  return { props: { ...caseStudy } };
};

export default CaseStudyTemplate;
