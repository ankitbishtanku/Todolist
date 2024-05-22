

const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();
var todoControler = require('./controler/todoControler');

const port = 5000;

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoControler(app);

const db = require('./setup/urls').mongoURL;
mongoose
	.connect(db)
	.then(()=> console.log(`mongodb connected`))
	.catch((err)=> console.log(err));

app.listen(port, () =>{
	console.log(`server is running at ${port}`);
});