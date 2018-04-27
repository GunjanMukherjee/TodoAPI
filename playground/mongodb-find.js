// http://mongodb.github.io/node-mongodb-native/3.0/api/Cursor.html
// const {MongoClient} = require('mongodb');

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB');
    /*
    db.collection('Todos').find({
        _id: new ObjectID("5adf3ecb93667b0a75530976")
        }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined,2));
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });
    */
   /*
   db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        }, (err) => {
            console.log('Unable to fetch todos', err);
        });
    */
   
   db.collection('Users').find({name: 'Gunjan Mukherjee'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
    });

    // db.close();
});