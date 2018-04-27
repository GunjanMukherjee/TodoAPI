const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('connected to MongoDB');
    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5adf632793667b0a75530d6c')
    },{
        $set: {
            completed: true
        }
    },{
        returnOriginal : false
    }).then((result) =>{
        console.log(result);
    })
    */

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5add8ea91f7904467b7d6eab')
    },{
        $set:{
            name: 'Rajaniya'
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal : false
    }).then((result) =>{
        console.log(result);
    });

    // db.close();
});