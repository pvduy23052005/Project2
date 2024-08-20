// nhung mongoose 
const mongoose = require("mongoose"); 
const slug = require("mongoose-slug-updater"); 

mongoose.plugin(slug); 


// tao de truy van ra database. 
const productSchema = mongoose.Schema({
   id : String , 
   TenSanPham: String,
   SoLuong: Number,
   slug : {
      type : String, 
      slug : "TenSanPham"
   },
   hienThi: {
      type : Boolean, 
      default :false,
      unique : true
   },
   hinhAnh: String,
   gia: Number,
   giam: Number, 
   status : String ,
   position : Number
}); 

const product = mongoose.model("product" , productSchema , "products");
// xuat ra co the su dung .
module.exports = product;