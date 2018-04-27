const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id='5ae1941f45835f54064e0394';

if (!ObjectID.isValid(id)) {
     console.log('ID not valid');
}

Todo.find({
    _id:id
}).then((todos)=>{

    if(todos.length === 0){
        return console.log('Id not found');
    }

    console.log('Todos',todos);
}).catch((e) => console.log(e));


Todo.findOne({
    _id:id
}).then((todo)=>{

    if(!todo){
        return console.log('Id not found');
    }

    console.log('Todo',todo);
}).catch((e) => console.log(e));;

Todo.findById(id).then((todo) =>{
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));


// 
User.findById('5ae0a5d62411b65c1fa6d703').then((user) => {
    if (!user) {
      return console.log('Unable to find user');
    }
  
    console.log(JSON.stringify(user, undefined, 2));
  }, (e) => {
    console.log(e);
  });
  