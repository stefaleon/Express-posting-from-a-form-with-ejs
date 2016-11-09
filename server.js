var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var globalString = '';

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {	
	res.render('index', {passedString: globalString});
});

app.post('/poststring', function(req, res){	
	globalString = req.body.postStringName;
	res.redirect('/');
});

app.listen(3000, function(){
	console.log('Server up on port 3000.')
});