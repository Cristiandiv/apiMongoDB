const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
    
)

app.use (express.json());

let uri = 'mongodb://localhost:27017';

mongoose.connect(uri)
    .then(()=>{
    console.log("Conectamos ao mongoDB")
    app.listen(3000)
})
.catch((err)=>{
    console.log(err)
})

app.get('/', (rep,res)=>{
    res.json({message: "Ola, mundo!"})
})

app.listen (3000);