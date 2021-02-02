export type Page = {
  id: string;
  slug: string[];
  title: string;
};

export type PageParams = Pick<Page, 'slug'>;

const pages: Page[] = [
  {
    id: 'approach',
    slug: ['approach'],
    title: 'People motivate what we do and how we do it.',
  },
  {
    id: 'careers',
    slug: ['careers'],
    title: 'Solving seemingly impervious challenges.',
  },
  {
    id: 'contact',
    slug: ['contact'],
    title: "Like what you see? Let's get started.",
  },
  {
    id: 'culture',
    slug: ['culture'],
    title:
      'We are engineers and artisans, collaborating to make custom software people love.',
  },
  {
    id: 'home',
    slug: ['/'],
    title: 'Software that moves people.',
  },
];

export const listPages = async (): Promise<Page[]> => {
  return pages;
};

export const findPageBySlug = async (slug: string[]): Promise<Page> => {
  const page = pages.find((p) =>
    p.slug.every((value, index) => value === slug[index]),
  );

  if (!page) {
    throw new Error('Unknown Page');
  }

  return page;
};

export type Person = {
  email: string;
  fullName: string;
  id: string;
};

export type BlogPost = Page & {
  authors: Person[];
};

const blogPosts: BlogPost[] = [
  {
    authors: [
      {
        email: 'nkessler@base2.io',
        fullName: 'Nathan Kessler',
        id: 'nkessler',
      },
    ],
    id: 'ssr-with-svelt',
    slug: ['2020-12-12-svelte-ssr'],
    title: 'Server-Side Rendering With Svelte.',
  },
];

export const listBlogPosts = async (): Promise<BlogPost[]> => {
  return blogPosts;
};

export const findBlogPostBySlug = async (slug: string[]): Promise<BlogPost> => {
  const blogPost = blogPosts.find((post) =>
    post.slug.every((value, index) => value === slug[index]),
  );

  if (!blogPost) {
    throw new Error('Unknown Blog Post');
  }

  return blogPost;
};

export type Client = {
  id: string;
  name: string;
};

export type CaseStudy = Page & {
  clients: Client[];
};

const caseStudies: CaseStudy[] = [
  {
    clients: [{ id: 'sherwin-williams', name: 'Sherwin Williams' }],
    id: 'colorsnap-visualizer',
    slug: ['colorsnap-visualizer'],
    title: 'ColorSnap® Visualizer',
  },
];

export const listCaseStudies = async (): Promise<CaseStudy[]> => {
  return caseStudies;
};

export const findCaseStudyBySlug = async (
  slug: string[],
): Promise<CaseStudy> => {
  const caseStudy = caseStudies.find((cs) =>
    cs.slug.every((value, index) => value === slug[index]),
  );

  if (!caseStudy) {
    throw new Error('Unknown Case Study');
  }

  return caseStudy;
};
