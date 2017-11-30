const fs = require('fs');
const grayMatter = require('gray-matter');
const path = require('path');
const authors = require('./_content/team.json');

const postTemplate = path.resolve('src/templates/post.js');

// TODO: Switch to using GraphQL for this.
const readPostsSync = () =>
  fs.readdirSync('_content/posts').map(fileName => {
    const fullPath = `_content/posts/${fileName}`;
    const { content, data } = grayMatter.read(fullPath);
    data.author = authors.find(a => a.id === data.author).name;
    const id = path.parse(fullPath).name;

    return { content, data, id };
  });

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  readPostsSync()
    .forEach(post => {
      createPage({
        component: postTemplate,
        context: Object.assign({}, post),
        path: post.data.path,
      });
    });

  return Promise.resolve(true);
};
