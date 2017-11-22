const fs = require('fs');
const grayMatter = require('gray-matter');
const path = require('path');

const postTemplate = path.resolve('src/templates/post.js');

const postIdToPath = id => {
  const parts = id.split('-');
  const datePart = parts.slice(0, 3).join('/');
  const slugPart = parts.slice(3).join('-');

  return `${datePart}/${slugPart}`;
};

const readPostsSync = () =>
  fs.readdirSync('_content/posts').map(fileName => {
    const fullPath = `_content/posts/${fileName}`;
    const { content, data } = grayMatter.read(fullPath);
    const id = path.parse(fullPath).name;

    return { content, data, id };
  });

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  readPostsSync()
    .forEach(post =>
      createPage({
        component: postTemplate,
        context: Object.assign({}, post),
        path: postIdToPath(post.id),
      }),
    );

  return Promise.resolve(true);
};
