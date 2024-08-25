// lay ve data
const product = require("../../model/product.model.js"); 

module.exports.index = async ( req, res) => { 
   
   const find = {
      hienThi : false ,
      status : "active"
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

// [GET] /products/slug. 
module.exports.slug = async ( req ,res) => { 

   try {

      let find = { 
         hienThi : false , 
         slug : req.params.slug , 
         status : "active"
      }

      const product1 = await product.findOne(find); 

      res.render("client/pages/products/detail.pug" ,  {
         pageTitle : "chi tiet san pham " , 
         product: product1 
      }); 

   } catch (error) {
      console.log("loi"); 
   }

}