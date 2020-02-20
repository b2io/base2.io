const path = require('path');

const postTemplate = path.resolve('src/templates/post.jsx');
const caseStudyTemplate = path.resolve('src/templates/caseStudy.jsx');
const jobTemplate = path.resolve('src/templates/job.jsx');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query GatsbyNodeQuery {
          caseStudies: allMarkdownRemark(
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
          .forEach(({ node }) =>
            createPage({
              component: postTemplate,
              context: { id: node.id },
              path: node.frontmatter.path,
            })
          );

        const createCaseStudyPage = caseStudy =>
          createPage({
            component: caseStudyTemplate,
            context: { id: caseStudy.id },
            path: `case-studies/${caseStudy.frontmatter.path}`,
          });

        result.data.caseStudies.edges
          .filter(e => !!e.node.frontmatter.path)
          .forEach(e => createCaseStudyPage(e.node));

        result.data.jobs.edges
          .filter(e => !!e.node.frontmatter.path)
          .forEach(({ node }) =>
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
