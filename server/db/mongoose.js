const mongoose = require('mongoose');
// require('dotenv').config();

const mongoURI = `mongodb+srv://user1999:mB82l2WJgiNUTzWz@food-tems-e14pe.mongodb.net/test?retryWrites=true`;

mongoose.connect(mongoURI,{ useNewUrlParser: true }).then(()=>{
  console.log('Server connected to database!');
}).catch( e => console.log('Could not connect to database :('));

module.exports = {mongoose};