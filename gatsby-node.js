const path = require('path');

const postTemplate = path.resolve('src/templates/post.jsx');
const jobTemplate = path.resolve('src/templates/job.jsx');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query GatsbyNodeQuery {
          jobs: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/_content/jobs/" } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  id
                  path
                }
              }
            }
          }
          posts: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/_content/posts/" } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  id
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) return reject(result.errors);

        const createPostPage = post =>
          createPage({
            component: postTemplate,
            context: { id: post.id },
            path: post.frontmatter.path,
          });

        const postPages = result.data.posts.edges
          .filter(e => !!e.node.frontmatter.path)
          .map(e => createPostPage(e.node));

        const createJobPage = job =>
          createPage({
            component: jobTemplate,
            context: { id: job.id },
            path: `jobs/${job.frontmatter.path}`,
          });

        const jobPages = result.data.jobs.edges
          .filter(e => !!e.node.frontmatter.id)
          .map(e => createJobPage(e.node));

        return postPages.concat(jobPages);
      })
    );
  });
};
