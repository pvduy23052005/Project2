const mongoose = require("../node_modules/mongoose"); 
// ket noi voi database  . 
module.exports.connect = async () => {
   try {
      await mongoose.connect('mongodb://localhost:27017/Data-base'); 
      console.log("Thanh cong"); 
   } catch (error) {
      console.log("That Bai"); 
   }
}