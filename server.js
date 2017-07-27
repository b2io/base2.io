const express = require('express');
const next = require('next');

const PRODUCTION = process.env.NODE_ENV === 'production';
const app = next({ dev: !PRODUCTION });
const handleRequest = app.getRequestHandler();

app.prepare().then(() => {
  express()
    .get('/blog/:id', (req, res) =>
      app.render(req, res, '/post', { id: req.params.id }),
    )
    .get('*', (req, res) => handle(req, res))
    .listen(3000, error => {
      if (error) throw error;

      console.log('> Ready on http://localhost:3000');
    });
});
