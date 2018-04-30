var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://test:test@ds161939.mlab.com:61939/todoapp');


module.exports = {mongoose};