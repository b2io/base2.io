const fs = require('fs');
const matter = require('gray-matter');
const path = require('path');

const fetchBlogPosts = () =>
  fs.readdirSync('./_posts').map(fileName => {
    const { content, data } = matter.read(`./_posts/${fileName}`);
    const id = path.parse(fileName).name;

    return { content, data, id };
  });

module.exports = {
  exportPathMap() {
    const blogPostExports = fetchBlogPosts().reduce(
      (result, { content, data, id }) =>
        Object.assign({}, result, {
          [`/blog/${id}`]: {
            page: '/post',
            query: { content, data, id },
          },
        }),
      {}
    );

    return Object.assign({}, blogPostExports, {
      '/': { page: '/' },
    });
  },
};
