const http = require('http');

const port = 8000;

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Home</h1>');
    res.end();
  } else if (req.url == '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>About</h1>');
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>404 NOT FOUND</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
