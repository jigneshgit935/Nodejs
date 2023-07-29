const http = require('http');

const port = 8000;

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
