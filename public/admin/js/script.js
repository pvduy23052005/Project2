// tinh nang bo loc . 
// lay ra tat cac cac button luong . 
const listButton = document.querySelectorAll("[status-button]")

let url = new URL(window.location.href); 
if( listButton.length !=0){
   // duyet qua cac button 
   listButton.forEach((button) =>{
      button.addEventListener("click" ,() => {
         //lay ve gia tri thuoc tinh cua button 
         const status = button.getAttribute("status-button"); 
         // neu status khac rong . 
         if( status){
            // thay doi gia tri thuoc tinh url .
            url.searchParams.set("status" , status);
         }
         else {
            // neu rong thi xoa len bien status . 
            url.searchParams.delete("status"); 
         }

         // chap nhat lai url . 
         window.location.href = url.href; 
      }); 
   }); 
}

//---------------------------------------------
//TINH NANG TIM KIEM . 
// lay ve form-search 
const formSearch = document.querySelector("#form-search"); 
if(formSearch){
   formSearch.addEventListener("submit" , (event) =>{
      // lay ve url . 
      event.preventDefault(); 
      let url = new URL(window.location.href); 
      // lay value o input . 
      const keyword = event.target.keyword.value; 
      if(keyword){
         url.searchParams.set("keyword" , keyword); 
      }
      else {
         url.searchParams.delete("keyword"); 
      }

      event.target.keyword.value = keyword; 
      // thay doi lai url tren client . 
      window.location.href = url.href; 
   }); 
}
//-------------------------------------
// LAM PHAN PHAN TRANG . 
// lay ra cac butotn . 
const buttonPage = document.querySelectorAll("[button-page]"); 
if( buttonPage.length != 0){
   // lay ve url 
   let url = new URL(window.location.href); 
   buttonPage.forEach( (button) =>{
      button.addEventListener("click" , () => {
         // lay ra gia tri butto-page 
         const page =button.getAttribute("button-page"); 
         url.searchParams.set("page" , page); 
         window.location.href = url.href ; 
      }); 
   }); 
}