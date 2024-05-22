var bodyParser = require('body-parser');
var data = [{item: 'tea'}, {item: 'coffee'}];
var encoder = bodyParser.urlencoded({extended: true});
var Todo = require('../models/TodoControler');


module.exports = function (app){
	app.get('/todo', (req, res) =>{
		Todo
		.find()
		.then((data) =>{
			res.render('todo', {todos: data});
		})
		.catch(err => console.log(err));
	});


	app.post('/todo', encoder, (req, res) =>{
		// console.log(req.body);
		Todo
		.find()
		.then(todo =>{
			var items = new Todo({
				item : req.body.item
			})			
			items.save()
			.then(todo => {
				res.render('todo', {todos: items});
			})
			.catch(err => console.log(err));
		})
		.catch(err => console.log(err));
	});



	app.delete('/todo/:item', (req, res) =>{
		console.log(req.params)
		Todo
		.findOne({item: req.params.item})
		.deleteOne()
		.then(todo =>{
			res.json(todo);
		})
		.catch(err => console.log(err));		
	});



	app.post('/todo/:item',encoder, (req, res, next) =>{
		var newItem = req.params.item;
		Todo.findOneAndUpdate({item: req.body.item},
                {$set: {item: newItem}},
                {new: true})
        .then(todo => {
        	console.log("todo", todo);
			res.json(todo);
        })
        .catch(err => console.log(err));
	});
};

