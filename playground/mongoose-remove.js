const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });


// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({'_id':'5ae3e2875e3d6c2453471849'}).then((todo) => {
//     console.log(todo);
// });

// Return Null if not found.


Todo.findByIdAndRemove('5ae3e2985e3d6c245347184b').then((todo) => {
    console.log(todo);
});


