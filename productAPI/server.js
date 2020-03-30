var express = require("express");
var bodyparser = require("body-parser");

var cors = require('cors')

var app = express();

app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
var productAPI = require("./controllers/product.controller");
app.use("/api/products",productAPI);

app.listen(8080);

app.use(cors())

console.log("server up and running on 8080");