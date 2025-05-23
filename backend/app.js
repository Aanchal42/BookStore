const express = require("express");
const mongoose = require("mongoose"); 
const app = express();
require ("dotenv").config();
require("./conn/conn");
const cors = require("cors");
const User = require("./routes/user")
const Books = require("./routes/book")
const Favourite = require("./routes/favourite");
const Cart = require("./routes/cart");
const Order = require("./routes/order")
app.use(cors());
app.use(express.json());
app.use(cors({
     origin: 'http://localhost:5173'
   }));
//routes
app.use( "/api/v1",User);
app.use( "/api/v1",Books);
app.use("/api/v1" ,Favourite)
app.use("/api/v1" ,Cart)
app.use("/api/v1" ,Order)
// creating port
app.listen(process.env.PORT, () =>{
     console.log(`server started  at port ${process.env.PORT}`);
});