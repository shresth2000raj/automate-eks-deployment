const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;
const data = null;
console.log(data.data); 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from a CI/CD Pipeline!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});

