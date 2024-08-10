const express = require("express"); 
const methodOverride = require('method-override');
const appAdmin = require("./routes/admin/index.route.js"); 
const mongoose = require("./config/database.js"); 

require("dotenv").config();  
const app = express(); 
const port = process.env.PORT;

// goi de file ket noi database . 
mongoose.connect(); 

// cap quyen cho foder public . 
app.use(express.static("public")); 

app.use(methodOverride('_method')); 

appAdmin(app); 
app.listen(port , () => {
   console.log(`Run sever ${port}`); 
});
