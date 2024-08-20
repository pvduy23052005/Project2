

module.exports.createPost = ( req , res , next) => {
   if( !req.body.TenSanPham ){
      req.flash("error" ,`Vui long nhap tieu de!` ); 
      res.redirect("back"); 
      return ; 
   }
   next(); 
}