// phan thay doi 1 product . 
// lay ve the form . 
const buttonChange = document.querySelectorAll("[button-change-status]"); 
if(buttonChange.length > 0){
   // lay ra form 
   const formChange = document.querySelector("#form-change-status"); 
   // lay ve cac url /product/change-status/
   const path = formChange.getAttribute("path"); 
   // duyet qua cac button . 
   buttonChange.forEach( (button) => {
      button.addEventListener("click" , () =>{
         //lay ve trang thai . 
         const dataStatus = button.getAttribute("data-status"); 
         //lay ve id . 
         const dataId = button.getAttribute("data-id"); 
         // thay doi lai trang thai . 
         const newStatus = (dataStatus == "active" ? "inactive": "active"); 

         const action = path + `/${newStatus}/${dataId}`
         formChange.action = action ; 
         
         // gui khi an vao button . 
         formChange.submit(); 
      }); 
   }); 
}