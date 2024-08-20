
const routeHome = require("./home.route.js"); 
const routeProduct = require("./product.route.js") 

module.exports = (app) => { 
   // nhung 2 file 
   app.use("/" , routeHome); 

   app.use("/products", routeProduct); 
}