/*
import * as http from 'http';
const port = 9000;
//import text from './text.tsx';

const server = http.createServer((request, response) => {
    response.writeHead(200, {
      "Content-Type": "text/html"
    });
		//const responseMessage =text
    const responseMessage = "<h1>Hello World</h1>";
    response.end(responseMessage);
    console.log(`Sent a response : ${responseMessage}`);
});

server.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);
*/



import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import App from '../src/App.tsx'
const appReact=ReactDOMServer.renderToString(React.createElement(App))
const text=`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Title</title>
  </head>
  <body>
    <div id="root">${appReact}</div>
		<script src="/hydrate/bundlehydrate.js"></script>
  </body>
</html>
`
import express from 'express';
const app = express()
///Users/oha/Documents/code/techtrain/react-kiso4/distb/bundle
//app.use("/bundle",express.static('distb/public'));
//<script src="/public/test.js"></script>
//<script src="/bundle/test.js"></script>
//app.use("/public",express.static('public'));
app.use("/hydrate",express.static('distb/hydrate'));
app.get('/', (req, res) => {
	res.send(text)
	//res.send('<h2>Hello World!</h2>')
})
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})

