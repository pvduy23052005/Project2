const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadCloud = require("../../middlewares/admin/uploadCloud.middlewares.js");
const validate = require("../../validates/admin/product.validate.js");
const controller = require("../../controllers/admin/product.controller.js");

// // Nhung file can dung . 
// const cloudinary = require('cloudinary').v2;
// const streamifier = require('streamifier');
// // CAU HINH CHO cloudinary .
const upload = multer();

// cloudinary.config({
//    cloud_name: "djzxfopoi",
//    api_key: "421895287111329",
//    api_secret:"A6sbd5FZeT3DYBZwgymntbKBzmM"// Click 'View API Keys' above to copy your API secret
// });

router.get("/", controller.product);

// them route de thay doi status san pham . 
router.patch("/change-status/:status/:id", controller.changeStatus);

router.patch("/change-multi", controller.changeMulti);

router.patch("/delete/:id", controller.deleteItem);

// them moi 1 san pham . [get]
router.get("/create", controller.createGet);

router.post("/create",
   upload.single("hinhAnh"),
   uploadCloud.uploadCloud,
   validate.createPost,
   controller.createPost
);

//[get] /admin/product/edit/:id,
router.get("/edit/:id", controller.editGet);

router.patch("/edit/:id",
   upload.single("hinhAnh"),
   uploadCloud.uploadCloud,
   validate.createPost,
   controller.editPatch
);

module.exports = router;
