
import * as http from 'http';
const port = 9000;
import index from './index.tsx';

const server = http.createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
		const responseMessage =index
    //const responseMessage = "<h1>Hello World</h1>";
    response.end(responseMessage);
    console.log(`Sent a response : ${responseMessage}`);
});

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);