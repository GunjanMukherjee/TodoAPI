// const MongoClient = require('mongodb').MongoClient;

// 
/*
const {MongoClient,ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
console.log(obj.getTimestamp());
console.log(obj.toString());
*/

const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB');
    
    //Insert new Doc into Todos
    /*
    db.collection('Todos').insertOne({
        text: 'something to do',
        completed:false,
        }, (err,result) => {
        if(err){
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    */
    // Insert new doc into Users (name, age, location)
    /*
    db.collection('Users').insertOne({
        name: 'Gautam Mukherjee',
        age: 31,
        location: 'Kolkatta'
        }, (err,result) => {
            if(err){
                return console.log('Unable to insert user',err);
            }
            console.log(result.ops);
            // console.log(result.ops[0]._id.getTimestamp());
    });
    */
    db.close();
});