const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' });
    return res.end;
  }
  console.log(`***${req.method}: ${req.url}`);
  res.end('<h1>Hello, World!</h1>');
});

server.listen(port, err => {
  if (err) {
    return console.error('FATAL ERROR');
  }

  console.log(`server listening on port ${port}`);
});
