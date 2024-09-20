const mongoose = require("../node_modules/mongoose"); 
// ket noi voi database  . 
module.exports.connect = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URL); 
      console.log("Thanh cong"); 
   } catch (error) {
      console.log("That Bai"); 
   }
}