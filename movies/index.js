require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors"); // cros platform 
// const config = require('./config')
// const routes = require('./app/routes')
const movies = require("./routes/movies");
// https://www.omdbapi.com/?s=fast&apikey=b011c0fd
const app = express()
// require("./cacheManager");

app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

// app.get('/', (req, res) => {
//     // eslint-disable-next-line no-tabs
//     res.status(200).send('Welcome to the Node.js Cache and Performance App')
// })

//My Routes
app.use("/api", movies);

//PORT
const port = process.env.PORT || 8000;

//Starting a server
app.listen(port, () => {
console.log(`app is running at`,port);
});
