const express = require("express"); 
const router = express.Router(); 
const controller = require("../../controllers/admin/product.controller.js");

router.get("/" ,controller.product); 

// them route de thay doi status san pham . 
router.patch("/change-status/:status/:id",controller.changeStatus); 

router.patch("/change-multi" , controller.changeMulti); 

router.patch("/delete/:id" , controller.deleteItem); 

module.exports = router; 
