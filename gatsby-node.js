const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

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
        }
      `).then(result => {
        if (result.errors) return reject(result.errors);

        const postTemplate = path.resolve('src/templates/post.jsx');
        const postNodes = result.data.posts.edges.map(e => e.node);

        return postNodes.map(node =>
          createPage({
            component: postTemplate,
            context: { id: node.id },
            path: node.frontmatter.path,
          }),
        );
      }),
    );
  });
};
