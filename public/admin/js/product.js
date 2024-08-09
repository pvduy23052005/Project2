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

// Tinh nang click . 
// lay ve cac checkAll 
const table = document.querySelector("[checkbox-multi]"); 
if( table){
   // lay ve checkAll 
   const checkAll = table.querySelector("input[name='checkAll']"); 

   // lay ve cai check con 
   const listCheck = table.querySelectorAll("input[name='id']"); 
   // thuoc tinh .checked
   checkAll.addEventListener("click" , () => {
      if( checkAll.checked ===true){
         listCheck.forEach( (input) => {
            input.checked = true; 
         }); 
      }
      else {
         listCheck.forEach( (input) => {
            input.checked = false; 
         }); 
      }
   }); 
   // duyet qua cac listCheck . 
   listCheck.forEach( (input) => { 
      input.addEventListener("click" , () => { 
         // lay cac o input dat tich , 
         const count = table.querySelectorAll("input[name='id']:checked").length; 
         if( count == 4){
            checkAll.checked = true; 
         }
         else {
            checkAll.checked = false ; 
         }
      }); 
   }); 
}

// Tinh nag thay doi nhieu san pham . 
// lay ve form 
const formChange = document.querySelector("[form-change-multi]"); 
if(formChange){
   formChange.addEventListener("submit" , (event) => { 
      // tranh bo load lai trang  
      event.preventDefault(); 
      // lay ve cac da check . 
      const count = table.querySelectorAll("input[name='id']:checked");

      // lay ra o input trong form . 
      const inputForm = formChange.querySelector("input[name='ids']"); 

      
      if(count.length > 0){
         let listId = []; 
         count.forEach( (input) => { 
            const id = input.value ; 
            listId.push(id); 
         }); 

         const stringId = listId.join(", "); 
         inputForm.value = stringId; 
         
         formChange.submit(); 
         
      }
      else {
         alert("Chon it nhat 1 ban ghi");
      }
   }); 
}

