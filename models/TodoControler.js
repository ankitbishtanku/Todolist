const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({ 
	item: {
		type: String,
	}
});

module.exports = Todo = mongoose.model('resultTodo', TodoSchema);