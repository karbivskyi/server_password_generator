require('dotenv').config();
const mongoose = require('mongoose');
const DB_AUTH = process.env.DB_AUTH;
mongoose.connect(DB_AUTH, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB')
});
