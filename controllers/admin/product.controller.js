 // nhung model vao 
const product = require("../../model/product.model.js"); 
const productHelper = require("../../helpers/products.js"); 
const helperSearch = require("../../helpers/search.js")
const helperPagination = require("../../helpers/pagination.js"); 

module.exports.product = async (req, res) =>{
   // goi den phan bo loc ., 
   let listButton = productHelper(req.query); 

   // goi den chuc nang tim kiem . 
   let objectSearch = helperSearch(req.query); 
   
   // lay data  . 
   let find = {}
   if(req.query.status){// neu status cua product khac rong . 
      find.status = req.query.status
   }

   if(objectSearch.keyword){// ney keyword khac rong . 
      find.TenSanPham = objectSearch.TenSanPham; 
   }

   // LAM PHAN TRANG .  
   // dem so luong Products 
   const countProduct = await product.countDocuments(); 
   
   // tao1 object . 
   let objectPagination = helperPagination(
      {
         currentPage : 1, 
         limit : 4 
      }, 
      req.query, 
      countProduct 
   )

   const data = await product.find(find).limit(objectPagination.limit)
   .skip(objectPagination.skip);

   res.render("admin/pages/products/index.pug" ,{
      pageTitle : "Trang San Pham ", 
      product : data , 
      listButton : listButton,
      pagination : objectPagination 
   }); 
}

// /change-status/:status/:id
module.exports.changeStatus = async (req , res) =>{
   // su dung lop params lay cac url de gui len.
   
   // lay ve id on url . 
   const id = req.params.id; 
   //lay ve status on url . 
   const status = req.params.status; 
   
   try {
      // su ham updateOne
      await product.updateOne({_id : id } , { status : status}); 
   } catch (error) {
   }

   // su dung ham khong cho quay lai url qua 
   res.redirect("back"); 
} 
module.exports.changeMulti = async ( req , res) => {
   const type = req.body.type ; 
   const listId  = req.body.ids.split(", ");  

   switch (type) {
      case "active":
         await product.updateMany({ _id: { $in: listId } }, { status: "active" });
         break;
      case "inactive": 
         await product.updateMany({ _id: { $in: listId } }, { status: "inactive" });
      default:
         break;
   }
   // khong quanh lai trang trc do . 
   res.redirect("back"); 
}

