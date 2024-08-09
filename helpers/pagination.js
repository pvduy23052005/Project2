module.exports = (objectPagination , query , countProduct) => {
   // tinh so luong .  
   const countPagination = Math.ceil(countProduct / objectPagination.limit);
   // cong them 1 doi tuong soLuongPage . 
   objectPagination.soLuongPage = countPagination; 

   if(query.page){
      objectPagination.currentPage = parseInt(query.page); 
   }
   objectPagination.skip = (query.page -1) * objectPagination.limit; 

   return objectPagination
}