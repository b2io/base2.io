const fetchBlogPosts = require('./config/fetchBlogPosts');

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
