const express = require('express');

const app = express();

const port = 8000;

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
