// nhung mongoose 
const mongoose = require("mongoose"); 

// tao de truy van ra database. 
const productSchema = mongoose.Schema({
   id : String , 
   TenSanPham: String,
   SoLuong: Number,
   hienThi: Boolean,
   hinhAnh: String,
   gia: Number,
   giam: Number, 
   status : String 
}); 

const product = mongoose.model("product" , productSchema , "products");
// xuat ra co the su dung .
module.exports = product;