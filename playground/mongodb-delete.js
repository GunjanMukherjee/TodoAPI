// http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html
// const {MongoClient} = require('mongodb');

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB');
    
    // deleteMany
    /*
    db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
        console.log(result);
    });
    */

    // deleteOne
    /*
    db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
        console.log(result);
    });
    */

    // findOneAndDelete
    /*
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });
    */

   db.collection('Users').findOneAndDelete({_id: new ObjectID("5adf67c393667b0a75530f84")}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
    });

    // db.close();
});