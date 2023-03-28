
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/MongoDB")
     .then(()=> console.log("database connected succesfully"))
     .catch(()=> console.log("error while connecting"))