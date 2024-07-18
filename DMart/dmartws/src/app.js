const express = require("express");
const app=express();
const router = require("./routes/routing");
const errorLogger = require("./utilities/errorlogger");
const requestLogger = require("./utilities/requestlogger");
const cors = require("cors");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(requestLogger);
app.use("/",router);
app.use(errorLogger);


app.listen(1050);