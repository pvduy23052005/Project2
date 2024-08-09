//nhung hai route con vao . 
const dashboardRoute = require("./dashboard.route.js"); 
const productRoute = require("./product.route.js"); 

module.exports = (app) =>{
   app.use("/", dashboardRoute ); 

   app.use("/products" , productRoute); 
}