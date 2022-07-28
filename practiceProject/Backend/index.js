const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const productRoute = require('./routes/ProductRoutes')

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

dotenv.config();

const db = process.env.DB_LOCAL;
const port = process.env.PORT;

mongoose.connect(db).then(res=>{
    console.log("Connected")
})

app.use("/api",productRoute)

app.listen(port,()=>{
    console.log("Listening")
})
