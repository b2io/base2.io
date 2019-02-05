const path = require('path');

const postTemplate = path.resolve('src/templates/post.jsx');
const jobTemplate = path.resolve('src/templates/job.jsx');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query GatsbyNodeQuery {
          posts: allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  path
                }
              }
            }
          }
          jobs: allJobsJson {
            edges {
              node {
                id
                description
                position
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

        const createJobPage = job =>
          createPage({
            component: jobTemplate,
            context: { id: job.id },
            path: `jobs/description/${job.id}`,
          });

        const postPages = result.data.posts.edges.map(e =>
          createPostPage(e.node)
        );
        const jobPages = result.data.jobs.edges.map(e => createJobPage(e.node));

        return postPages.concat(jobPages);
      })
    );
  });
};
