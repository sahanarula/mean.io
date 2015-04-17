var express = require('express');

var app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
// app.use(bodyParser());



//static web pages
app.get('/', function(req, res){
	res.render('index')
})


//api level
app.get('/api/user', function(req, res){
	res.json({name: 'sahil', reg: '12bce0416'});
})


//api level

app.listen(3000, function(){
	console.log('listening at 3000');
})