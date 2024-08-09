const express = require("express"); 
const router = express.Router(); 

const controller = require("../../controllers/admin/product.controller.js"); 
router.get("/" ,controller.product); 

// them route de thay doi status san pham . 
router.get("/change-status/:status/:id",controller.changeStatus); 

router.get("/change-multi" , controller.changeMulti); 

module.exports = router; 
