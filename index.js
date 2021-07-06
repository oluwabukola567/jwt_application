const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authroutes = require("./route/auth");
const postRoutes = require("./route/post");


dotenv.config();

mongoose.connect( process.env.DB_CONNECT, {useNewUrlParser: true },() =>
 console.log("connected to db")
);

app.use(express.json());


app.use("/user", authroutes);
app.use("/post", postRoutes);


app.listen(3000, () => console.log("welcome")); 
    
