const express= require('express');
const app = express()
///Users/oha/Documents/code/techtrain/react-kiso4/distb/bundle

//app.use(express.static('../public'));
app.use("/public",express.static('distb/public'));
app.get('/', (req, res) => {
	res.send(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Title</title>
		<script src="/public/test.js"></script>
  </head>
  <body>
		<div>あ</div>
  </body>
</html>

`)
	//res.send('<h2>Hello World!</h2>')
})
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})