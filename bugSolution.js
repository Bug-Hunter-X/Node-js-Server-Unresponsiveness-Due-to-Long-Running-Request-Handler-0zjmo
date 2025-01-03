const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  const worker = new Worker('./long-running-task.js');

  worker.on('message', (result) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Result: ${result}`);
  });

  worker.on('error', (err) => {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Error processing request');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// long-running-task.js
const { parentPort } = require('worker_threads');

setTimeout(() => {
  const result = 'Task completed after 5 seconds';
  parentPort.postMessage(result);
}, 5000);