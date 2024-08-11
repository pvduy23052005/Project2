const express = require("express"); 
const methodOverride = require('method-override');
const appAdmin = require("./routes/admin/index.route.js"); 
const mongoose = require("./config/database.js"); 
const bodyParser = require("body-parser"); 
//Fash : HIEN THI THONG BAO CHO  
const flash = require("express-flash"); 
const  cookieParser = require("cookie-parser"); 
const session = require("express-session"); 

require("dotenv").config();  


const app = express(); 
const port = process.env.PORT;

// goi de file ket noi database . 
mongoose.connect(); 

// Cấu hình body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// cap quyen cho foder public . 
app.use(express.static("public")); 

// cau hinh cho method-override . 
app.use(methodOverride('_method')); 

// cau hinh cho fash
app.use(cookieParser("PHUNGVANDUY")); 
app.use(session({cookie:  { maxAge : 60000}})); 
app.use(flash()); 

appAdmin(app); 
app.listen(port , () => {
   console.log(`Run sever ${port}`); 
});
