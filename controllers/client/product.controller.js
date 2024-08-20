// lay ve data
const product = require("../../model/product.model.js"); 

module.exports.index = async ( req, res) => { 
   
   const find = {
      hienThi : false ,
   }
   const data = await product.find(find).sort({position : "desc"}); 

      // tinh lai gia moi . 
      const newData = data.map((item) => { 
         item.giaMoi = (item.gia*(100 - item.giam)/100).toFixed(0); 
         return item ; 
      });

   res.render("client/pages/products/index.pug" , {
      pageTitle : "Trang san pham",
      product : newData
   })
}