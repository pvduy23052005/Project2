 // nhung model vao 
const product = require("../../model/product.model.js"); 
const productHelper = require("../../helpers/products.js"); 
const helperSearch = require("../../helpers/search.js");
const helperPagination = require("../../helpers/pagination.js"); 
const Product = require("../../model/product.model.js");

module.exports.product = async (req, res) =>{
   // goi den phan bo loc ., 
   let listButton = productHelper(req.query); 

   // goi den chuc nang tim kiem . 
   let objectSearch = helperSearch(req.query); 
   
   // lay data  . 
   let find = {
      hienThi : false  
   }
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

   const data = await product.find(find)
   .sort({position : "desc"} )  // sap xep theo gian dan . 
   .limit(objectPagination.limit)
   .skip(objectPagination.skip);

   res.render("admin/pages/products/index.pug" ,{
      pageTitle : "Trang San Pham ", 
      product : data , 
      listButton : listButton,
      pagination : objectPagination 
   }); 
}

// [patch]/change-status/:status/:id
module.exports.changeStatus = async (req , res) =>{
   // su dung lop params lay cac url de gui len.
   
   // lay ve id on url . 
   const id = req.params.id; 
   //lay ve status on url . 
   const status = req.params.status;
   
   try {
      // su ham updateOne
      await product.updateOne({_id : id } , { status : status}); 
      req.flash("thanhCong" , "Cap nhat Thanh cong"); 
   } catch (error) {
   }

   // su dung ham khong cho quay lai url qua 
   res.redirect("back"); 
} 

module.exports.changeMulti = async ( req , res) => {
   const type = req.body.type ; 
   const listId  = req.body.ids.split(", ");  

   console.log(type); 

   switch (type) {
      case "active":
         await product.updateMany({ _id: { $in: listId } }, { status: "active" });
         req.flash("thanhCong" , "Cap nhat Thanh cong"); 
         break;
      case "inactive": 
         await product.updateMany({ _id: { $in: listId } }, { status: "inactive" });
         req.flash("thanhCong" , "Cap nhat Thanh cong"); 
         break ; 
      case "delete-item" : 
         await product.updateMany( { _id: { $in: listId } }, { hienThi: true } );
         req.flash("thanhCong" , "Xoa thanh cong "); 
         break ; 
      case "change-position": 
         for( const item of listId){
            const [id ,  position1] = item.split("-"); 
            // chuyen tring -> int 
            const position = parseInt(position1); 
            await product.updateOne( { _id :  id } , {  position  : position } ); 
            req.flash("thanhCong" , "Cap nhat Thanh cong"); 
         }
         break ; 
      default:
         break;
   }
   // khong quanh lai trang trc do . 
   res.redirect("back"); 
}

module.exports.deleteItem = async ( req , res) => { 

   // lay ve id terne url . 
   const id = req.params.id ; 
   // cap nhat lai truong hieThi . 
   await product.updateOne( { _id : id} , { hienThi : true}); 
   req.flash("thanhCong" , "Xoa thanh cong"); 
   res.redirect("back"); 
}

// [GET] /admin/product/create
module.exports.createGet = ( req , res) => {

   res.render( "admin/pages/products/create.pug"  , {
      pageTitle : "Tao moi 1 san pham ", 
   }); 
}

// [POST] /admin/product/create
module.exports.createPost = async ( req , res) => {
   // chuyen doi cac truong lai thanh so .
   req.body.SoLuong = parseInt(req.body.SoLuong); 
   req.body.gia = parseInt(req.body.gia) ; 
   req.body.giam = parseInt(req.body.giam) ; 
   if(req.body.position == ""){
      req.body.position = await product.countDocuments() + 1;
   }else {
      req.body.position = parseInt(req.body.position) ; 
   }

   try {
      const product = new Product(req.body); 
      await product.save(); 
      console.log("CAP NHAT THANH CONG"); 
   } catch (error) {
      console.log("Loi");
   }

   res.redirect("/admin/products");
}

//[GET] /admin/product/edit/:id
module.exports.editGet = async ( req , res) => {
   try {
      let find = {
         hienThi : false , 
         _id : req.params.id 
      }
      const product1 = await product.findOne(find); 
      
      res.render("admin/pages/products/edit.pug", {
         pageTitle : "Chi tiet san pham ",
         product : product1
      }); 

   } catch (error) {
      res.redirect("/amin/products"); 
   }
}

// [PATCH] /admin/product/edit/:id
module.exports.editPatch = async ( req , res) => { 
   req.body.gia = parseInt(req.body.gia); 
   req.body.giam = parseInt(req.body.giam); 
   req.body.soLuong = parseInt(req.body.soLuong);
   req.body.position = parseInt(req.body.position);


   try {
      await product.updateOne({ _id : req.params.id} , req.body);  
   } catch (error) {
      console.log("Loi"); 
   }

   res.redirect("back"); 
}