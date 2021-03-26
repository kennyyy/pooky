const express = require("express")
const app = express();
const port = 5000;

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://pooky:zktmxldk1@pooky.nefxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify:false
}).then(()=> console.log("MonggoDB Connected..."))
.catch(err=> console.log(err));

//mongodb+srv://pooky:<password>@pooky.nefxk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority


app.get('/',(req,res)=> res.send("hello world!"));

app.listen(port, ()=> console.log(`example app listening on port ${port}!`));