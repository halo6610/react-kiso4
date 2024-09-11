
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import App from '../src/App'
const app=ReactDOMServer.renderToString(React.createElement(App))
const text=`
<!DOCTYPE html>
<html lang="en">
  <head>
		<base href="/" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Title</title>
		
  </head>
  <body>
    <div id="root">${app}</div>
		<base href="/" />
		<script src="distb/bundle.cjs" async defer></script>
		<div>あ</div>
  </body>
</html>
`
//<script src="distb/bundle.cjs"></script>
//<script type="module" src="/src/main.tsx"></script>
//<base href="/" />
/*
const index=ReactDOMServer.renderToString(
	<html lang="en">
		<head>
			<meta charSet="UTF-8" />
			<link rel="icon" type="image/svg+xml" href="/vite.svg" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Title</title>
		</head>
		<body>
			<div>あ</div>
		</body>
	</html>
	)
*/
export default text