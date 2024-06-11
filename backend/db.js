// mongodb stuff


// Todo {
//     title : String,
//     description : String,
//     completed : boolean
// }

const mongoose = require('mongoose')
 // mongodb+srv://kush:j3WxKh7Isj54zHqw@todo-cluster.gx9upz3.mongodb.net
mongoose.connect('mongodb+srv://kush:j3WxKh7Isj54zHqw@todo-cluster.gx9upz3.mongodb.net/?retryWrites=true&w=majority&appName=todo-cluster')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}