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
                  path
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) return reject(result.errors);

        result.data.posts.edges
          .filter(e => !!e.node.frontmatter.path)
          .map(({ node }) =>
            createPage({
              component: postTemplate,
              context: { id: node.id },
              path: node.frontmatter.path,
            })
          );

        result.data.jobs.edges
          .filter(e => !!e.node.frontmatter.path)
          .map(({ node }) =>
            createPage({
              component: jobTemplate,
              context: { id: node.id },
              path: `jobs/${node.frontmatter.path}`,
            })
          );

        return resolve();
      })
    );
  });
};
