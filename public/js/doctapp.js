$(function(){
    
   $("#menu-appointments").on("click", ()=>{

      window.location.replace("/appointments");
   
   });
   
   $("#menu-calendar").on("click", ()=>{

      window.location.replace("/calendar");
   
   });
   

   $("#menu-profile").on("click", ()=>{
   
      window.location.replace("/profile");
   
   });
   
   $("#menu-patients").on("click", ()=>{
   
      window.location.replace("/patients");
   
   });
   
/*    $("#menu-treatments").on("click", ()=>{
   
      window.location.replace("/treatments");
   
   }); */

   $("#menu-services").on("click", ()=>{
   
      window.location.replace("/services");
   
   });

})
