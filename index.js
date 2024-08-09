const express = require("express"); 
require("dotenv").config();  
const app = express(); 
const port = process.env.PORT;


// cap quyen cho foder public . 
app.use(express.static("public")); 

const appAdmin = require("./routes/admin/index.route.js"); 
appAdmin(app); 

// goi de file ket noi databse . 
const mongoose = require("./config/database.js"); 
mongoose.connect(); 


app.listen(port , () => {
   console.log(`Run sever ${port}`); 
});
