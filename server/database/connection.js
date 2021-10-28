
const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config({path:'.env'})

const connectDB ="mongodb+srv://admin:admin123@cluster0.mr9ys.mongodb.net/crudapp?retryWrites=true&w=majority";
console.log(connectDB);
mongoose.connect(connectDB,{
    useNewUrlParser:true,                    //it is used when there is showin a depricatedwarning message...
    useUnifiedTopology:true,
 })
.then(() => {
console.log('connection successful'); 
}).catch((err) => console.log("no connection"));