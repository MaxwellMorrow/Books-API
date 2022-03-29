require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();

// body parser for json? 
app.use(express.json());
app.use(cors())

// use controller route
app.use("/books",require("./controllers/books"))

app.get("/", (req,res)=>{
res.send("hello world")
})

app.listen(process.env.PORT, ()=>{
    console.log("listening on port 3004")
})