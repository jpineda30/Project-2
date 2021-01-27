$(function(){
    
   $("#menu-appointments").on("click", ()=>{

      window.location.replace("/appointments");
   
   });
   
   $("#menu-profile").on("click", ()=>{
   
      window.location.replace("/profile");
   
   });
   
   $("#menu-patients").on("click", ()=>{
   
      window.location.replace("/patients");
   
   });
   
   $("#menu-treatments").on("click", ()=>{
   
      window.location.replace("/treatments");
   
   });

   console.log(patient);

   $("#myModal").css("display","none");
});

 $(".closeEdit, #cancelEdit, #savePatientEdit").on("click",function(){
    $("#editModal").css("display","none");
 });

 $("#exitView, .closeView").on("click",function(){
    $("#viewModal").css("display","none");
 });

 $("#delete-icon").on("click",function(){
    
    $("#delete-prompt").css("display","block");

});

$("#cancelDel, .closeDeletion, #deleteBtn").on("click",function(){
    $("#delete-prompt").css("display","none");
});

// events

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

$("#menu-treatments").on("click", ()=>{

   window.location.replace("/treatments");

});


