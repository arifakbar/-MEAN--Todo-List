// Handle connection logic to the MongoDB database

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager',{useNewUrlParser:true}).
then(()=>{
    console.log("Connected to database successfully");
}).catch((err)=>{
    console.log("Facing error while connecting to the databse" , err);
});

//To prevent deprectation warnings(from MongoDB native driver)
mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',true);

module.exports = {
    mongoose
};