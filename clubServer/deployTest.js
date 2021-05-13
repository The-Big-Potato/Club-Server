// deployTest.js
const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
app.use(express.static('public'));
const port = 3001; 

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

let count = 0; // Visit count
let startDate = new Date(); // Server start Date time
var yourName = "Anthony Rogosich";
var userId = "ia8349";


app.get('/', function (req, res) {
    count++;
	var info = {name: yourName, id: "ia8349", counter: count};
	res.render('index.njk',info);
});

app.get('/uptime', function(req, res){
    let curDate = new Date();
	let infoDate = {startDate: startDate.toLocaleString(), currDate:curDate.toLocaleString()};
	res.render('upTime.njk',infoDate);
})

host = 'localhost';

app.listen(port, host, function () {
console.log(`deployTest.js app listening on IPv4: ${host}:${port}`);
});