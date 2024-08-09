module.exports = (query) =>{
   let listButton = [
      {
         name : "tat ca",
         class : "",
         status : ""
      },
      {
         name : "Hoat dong",
         class : "",
         status : "active"
      },
      {
         name : "Ngung hoat dong",
         class : "",
         status : "inactive"
      }
   ]
   // tim nut an va thay doi mau . 
   if(query.status){
      // 
      const index = listButton.findIndex((item) => item.status == query.status); 
      listButton[index].class = "mau"; 
   }
   else {
      listButton[0].class = "mau"
   }
   return listButton ;
}