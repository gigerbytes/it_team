var http = require('http')
var path = require('path')
var bodyParser = require('body-parser')
var express = require('express')
const port = 3000

var app = express();

app.set('views', path.join(__dirname, 'dist/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get("/", function(req, res) {
  res.render("index")
})

app.get("/dashboard", function(req, res) {
  res.render("dashboard")
})

app.listen(port)
console.log("Now listening on Port" + port)
