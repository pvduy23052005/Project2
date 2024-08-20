const express = require("express"); 
const router = express.Router(); 
const multer = require("multer"); 
const upload = multer( {dest : "./public/uploads/"} );
const validate = require("../../validates/admin/product.validate.js"); 

const controller = require("../../controllers/admin/product.controller.js");

router.get("/" ,controller.product); 

// them route de thay doi status san pham . 
router.patch("/change-status/:status/:id",controller.changeStatus); 

router.patch("/change-multi" , controller.changeMulti); 

router.patch("/delete/:id" , controller.deleteItem); 

// them moi 1 san pham . [get]
router.get("/create" , controller.createGet); 

router.post("/create" ,
   upload.single("hinhAnh"),
   validate.createPost,
   controller.createPost
);

//[get] /admin/product/edit/:id,
router.get("/edit/:id" , controller.editGet); 

router.patch("/edit/:id" ,
   upload.single("hinhAnh"),
   validate.createPost,
   controller.editPatch
); 

module.exports = router;
