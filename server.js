const express =require('express');
const dotenv=require('dotenv');
const morgan = require('morgan');
const bodyParser =require('body-parser');
const path = require('path');

require('./server/database/connection');

const app = express();
dotenv.config({path:'.env'})

const PORT = process.env.PORT||8080
console.log(process.env.MONGO_URI)

//log request
app.use(morgan('tiny'));  

//mongodb connection


//parse request to body-parser
app.use(bodyParser.urlencoded({extend:true}))

// set view engine
app.set("view engine", "ejs")  
//app.set("views", path.resolve(__dirname,"assets/css"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});