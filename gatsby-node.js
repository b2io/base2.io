const path = require('path');

const postTemplate = path.resolve('./src/templates/post.jsx');
const caseStudyTemplate = path.resolve('./src/templates/caseStudy.jsx');
const jobTemplate = path.resolve('./src/templates/job.jsx');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    query GatsbyNodeQuery {
      caseStudies: allMdx(
        filter: { fileAbsolutePath: { regex: "/_content/caseStudies/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
      jobs: allMdx(filter: { fileAbsolutePath: { regex: "/_content/jobs/" } }) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
      posts: allMdx(
        filter: { fileAbsolutePath: { regex: "/_content/posts/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors;

    result.data.posts.edges.forEach(({ node: post }) => {
      if (!post.frontmatter.path) return;
      createPage({
        component: postTemplate,
        context: { id: post.id },
        path: post.frontmatter.path,
      });
    });

    result.data.caseStudies.edges.forEach(({ node: client }) => {
      if (!client.frontmatter.path) return;
      createPage({
        component: caseStudyTemplate,
        context: { id: client.id },
        path: `case-studies/${client.frontmatter.path}`,
      });
    });

    result.data.jobs.edges.forEach(({ node: job }) => {
      if (!job.frontmatter.path) return;
      createPage({
        component: jobTemplate,
        context: { id: job.id },
        path: `jobs/${job.frontmatter.path}`,
      });
    });

    return result;
  });
};
