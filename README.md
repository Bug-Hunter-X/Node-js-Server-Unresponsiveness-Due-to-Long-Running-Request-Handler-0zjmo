# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js servers: unresponsiveness caused by long-running operations within request handlers.  A simple HTTP server is created that simulates a 5-second delay in processing a request.  This delay can lead to the server appearing to hang or become unresponsive to new requests.

The `bug.js` file contains the problematic code. The `bugSolution.js` demonstrates how to address this using asynchronous operations and techniques like worker threads or task queues.