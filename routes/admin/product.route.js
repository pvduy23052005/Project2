const express = require("express"); 
const router = express.Router(); 
const controller = require("../../controllers/admin/product.controller.js");

router.get("/" ,controller.product); 

// them route de thay doi status san pham . 
router.patch("/change-status/:status/:id",controller.changeStatus); 

router.patch("/change-multi" , controller.changeMulti); 

router.patch("/delete/:id" , controller.deleteItem); 

// them moi 1 san pham . [get]
router.get("/create" , controller.createGet); 

router.post("/create" , controller.createPost); 

module.exports = router;
