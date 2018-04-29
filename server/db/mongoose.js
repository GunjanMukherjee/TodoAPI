var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://test:test@ds149934.mlab.com:49934/gunjan');



module.exports = {mongoose};