const express = require('express');
const next = require('next');
const fetchBlogPosts = require('./config/fetchBlogPosts');

const PRODUCTION = process.env.NODE_ENV === 'production';
const app = next({ dev: !PRODUCTION });
const handleRequest = app.getRequestHandler();

app.prepare().then(() => {
  express()
    .get('/blog/:id', (req, res) => {
      const post = fetchBlogPosts().find(p => p.id === req.params.id);
      if (!post) return handleRequest(req, res);

      return app.render(req, res, '/post', post);
    })
    .get('*', (req, res) => handleRequest(req, res))
    .listen(3000, error => {
      if (error) throw error;

      console.log('> Ready on http://localhost:3000');
    });
});
