const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chatApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log('connected DB')
}).catch((error)=>{
    console.log('error', error)
})
