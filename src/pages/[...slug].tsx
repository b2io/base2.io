import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { findPageBySlug, listPages, PageParams } from '~/cms';
import { Layout } from '~/components';

export type PageTemplateProps = {
  title: string;
};

export const PageTemplate: NextPage<PageTemplateProps> = ({ title }) => {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const pages = await listPages();

  return {
    fallback: false,
    paths: pages.map((page) => {
      return { params: { ...page } };
    }),
  };
};

export const getStaticProps: GetStaticProps<
  PageTemplateProps,
  PageParams
> = async (context) => {
  if (typeof context.params === 'undefined') {
    throw new Error('Invalid PageTemplate params');
  }

  const page = await findPageBySlug(context.params.slug);

  return { props: { ...page } };
};

export default PageTemplate;
