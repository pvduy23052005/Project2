//nhung hai route con vao . 
const dashboardRoute = require("./dashboard.route.js"); 
const productRoute = require("./product.route.js"); 

module.exports = (app) =>{
   app.use("/admin", dashboardRoute ); 

   app.use("/admin/products" , productRoute); 
}