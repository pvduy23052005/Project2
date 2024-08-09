module.exports = (query) =>{
   object = {
      keyword : ""
   }
   // neu ma khac rong . 
   if(query.keyword){
      object.keyword = query.keyword; 
      // su dung regex. 
      object.TenSanPham = new RegExp(query.keyword , "i");  
   }
   return object; 
}