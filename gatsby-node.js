const path = require('path');

const postTemplate = path.resolve('src/templates/post.jsx');
const caseStudyTemplate = path.resolve('src/templates/caseStudy.jsx');

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

        const createCaseStudyPage = caseStudy =>
          createPage({
            component: caseStudyTemplate,
            context: { id: caseStudy.id },
            path: `caseStudies/${caseStudy.frontmatter.path}`,
          });

        const postPages = result.data.posts.edges
          .filter(e => !!e.node.frontmatter.path)
          .map(e => createPostPage(e.node));

        const caseStudyPages = result.data.caseStudies.edges
          .filter(e => !!e.node.frontmatter.path)
          .map(e => createCaseStudyPage(e.node));

        return postPages.concat(caseStudyPages);
      })
    );
  });
};
