const http = require('http');

const app = http.createServer();

app.on('request', (_, res) => {
  const response = 'Hello Holberton School!';

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', response.length);
  res.write(Buffer.from(response));
});

const PORT = 1245;

app.listen(PORT, 'localhost');

module.exports = app;
