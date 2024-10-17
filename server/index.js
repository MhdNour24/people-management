require("dotenv").config();
const express = require('express');
const connectDB = require("./connectDB");
const cors=require('cors');
const app=express();
connectDB();
app.use(express.json())
app.use(cors({
    origin:"*"
}))

// routes
const personRouter= require("./routes/person.route")
app.use("/api/people", personRouter)

const port_number=process.env.PORT || 3000;
app.listen(port_number, () => {
  console.log("the server is listening");
});