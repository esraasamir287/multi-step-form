const express = require("express");
let app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userController = require("./controllers/user.controller")
app.use(cors());
app.use(bodyParser.json());
app.post("/user",userController.addUser)
app.listen(8080,()=>{console.log('now I ready')})

