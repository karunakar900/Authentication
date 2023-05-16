const express = require('express');
const mongoose = require('mongoose');
const datarouter = require('./Routes/userroute');
const app = express();

mongoose.connect("mongodb+srv://authentication:6Mqee1uymNOoNXHG@cluster0.5kgg9ol.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => {
        console.log("connected to database");
    })
    .catch((error) => {
        console.log(error);
    })

app.use(express.json());
app.use("/", datarouter);



app.listen(8080, () => {
    console.log("server connected at port 8080");
})

