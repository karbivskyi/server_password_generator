const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://karbivskij:Ay5vj1n1BuWi2P9W@cluster0.vvlwsxc.mongodb.net/Passwords?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB')
});
