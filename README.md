# Express.js Server Unresponsive to Large POST Requests

This repository demonstrates a common issue in Express.js applications where the server becomes unresponsive when processing large JSON payloads in POST requests.  The problem stems from the default behavior of `express.json()` middleware, which attempts to parse the entire request body into memory before processing.

## Bug

The `bug.js` file contains an Express.js server that accepts POST requests to the `/data` endpoint. If a large JSON payload is sent, the server will hang.  This is because `express.json()` attempts to parse the entire body into memory before your route handler can access it.

## Solution

The `bugSolution.js` file demonstrates a solution to this problem using the `stream` module. It parses the JSON payload in chunks, significantly reducing the memory footprint and resolving the unresponsiveness issue.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install` to install express.
4. Run `node bug.js` to start the buggy server.
5. Use a tool like Postman or curl to send a POST request to `http://localhost:3000/data` with a large JSON payload (e.g., a JSON object with many properties and values).
6. Observe that the server hangs and becomes unresponsive.
7. Run `node bugSolution.js` to start the fixed server and repeat the POST request to observe that it functions correctly.

## License

MIT