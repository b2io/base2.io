import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { BlogPost, listBlogPosts } from '~/cms';
import { Layout } from '~/components';

export type BlogIndexPageProps = {
  blogPosts: BlogPost[];
};

const BlogIndexPage: NextPage<BlogIndexPageProps> = ({ blogPosts }) => {
  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug.join('/')}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<BlogIndexPageProps> = async () => {
  const blogPosts = await listBlogPosts();

  return { props: { blogPosts } };
};

export default BlogIndexPage;
