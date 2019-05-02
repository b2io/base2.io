const path = require('path');

const postTemplate = path.resolve('src/templates/post.jsx');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query GatsbyNodeQuery {
          markdown: allMarkdownRemark {
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

        const postPages = result.data.markdown.edges
          .filter(e => !!e.node.frontmatter.path)
          .map(e => createPostPage(e.node));
        return postPages;
      })
    );
  });
};
