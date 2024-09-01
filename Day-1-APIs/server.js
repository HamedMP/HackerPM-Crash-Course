const http = require('http');

let data = { items: [] }; // Local variable for CRUD operations

const server = http.createServer((req, res) => {
  if (req.url === '/api/hello' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, HackerPM!' }));
  } else if (req.url === '/api/echo' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(body);
    });
  } else if (req.url === '/api/items') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      switch (req.method) {
        case 'GET':
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(data));
          break;
        case 'POST':
          const newItem = JSON.parse(body);
          data.items.push(newItem);
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(newItem));
          break;
        case 'PUT':
          const updatedItem = JSON.parse(body);
          const index = data.items.findIndex(
            (item) => item.id === updatedItem.id
          );
          if (index !== -1) {
            data.items[index] = updatedItem;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(updatedItem));
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Item not found');
          }
          break;
        case 'DELETE':
          const { id } = JSON.parse(body);
          const initialLength = data.items.length;
          data.items = data.items.filter(
            (item) => !Object.keys(item).includes(id)
          );

          if (data.items.length < initialLength) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Item deleted');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Item not found');
          }
          break;
        default:
          res.writeHead(405, { 'Content-Type': 'text/plain' });
          res.end('Method Not Allowed');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 1000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
