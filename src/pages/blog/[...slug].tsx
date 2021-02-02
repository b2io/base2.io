import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { findBlogPostBySlug, listBlogPosts, PageParams } from '~/cms';
import { Layout } from '~/components';

export type BlogPostTemplateProps = {
  title: string;
};

export const BlogPostTemplate: NextPage<BlogPostTemplateProps> = ({
  title,
}) => {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
  const blogPosts = await listBlogPosts();

  return {
    fallback: false,
    paths: blogPosts.map((blogPost) => {
      return { params: { ...blogPost } };
    }),
  };
};

export const getStaticProps: GetStaticProps<
  BlogPostTemplateProps,
  PageParams
> = async (context) => {
  if (typeof context.params === 'undefined') {
    throw new Error('Invalid BlogPostTemplate params');
  }

  const blogPost = await findBlogPostBySlug(context.params.slug);

  return { props: { ...blogPost } };
};

export default BlogPostTemplate;
