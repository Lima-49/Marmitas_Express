const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const appRouter = require('./router/index.js')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/marmitasexpress', { useNewUrlParser: true});
var db = mongoose.connection;

if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

var port = process.env.PORT || 2121;
app.get('/', (req, res) => res.send('Marmitas Express'));

app.use("/api", appRouter);

app.listen(port, function () {
    console.log("Marmitas Express running in port : " + port);
});