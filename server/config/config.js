var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.PORT = 3000;
  // process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
  process.env.MONGODB_URI = 'mongodb://test:test@ds161939.mlab.com:61939/todoapp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  // process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
  process.env.MONGODB_URI = 'mongodb://test:test@ds161939.mlab.com:61939/todoapptest';
} else{
  process.env.MONGODB_URI = 'mongodb://test:test@ds161939.mlab.com:61939/todoapp';
}
