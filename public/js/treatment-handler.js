$(function(){
 
//target for deletion
 var target;  


// Modal events
$("#create-btn").on("click",function(){
    
     $("#myModal").css("display","block");
 
 });
 
 $(".view-icon").on("click",function(){
    
   let id = $(this).attr("data-id"); 
   
   $.ajax("/viewTtreatment/"+id,{

      type:"GET"

   }).then((response)=>{

      

      
      $("#viewModal").css("display","block");

   });



   

});

$("#edit-icon").on("click",function(){

   let id = $(this).attr("data-id"); 
   
   $.ajax("/viewTreatment/"+id,{

      type:"GET"

   }).then((response)=>{

      

     


      $("#editModal").css("display","block");
   });
    
   
});
 
 $(".close, #cancelCreate").on("click",function(){
    $("#myModal").css("display","none");
 });

 //save treatment, send object
 $("#saveTreatment").on("click",function(){

   let Treatment = {

    
     
   }

   $.ajax("/addTreatment",{
      type:"POST",
      data:Treatment,
   }).then((response)=>{

      window.location.replace("/treatments");
   });

   console.log(treatment);

   $("#myModal").css("display","none");
});

$("#saveEdit").on("click",function(){

 

   $.ajax("/updateTreatment",{
      type:"PUT",
      data:Treatment,
   }).then((response)=>{

      
      window.location.replace("/treatments");

   });

  

   $("#myModal").css("display","none");
});

 $(".closeEdit, #cancelEdit, #saveTreatmentEdit").on("click",function(){
    $("#editModal").css("display","none");
 });

 $("#exitView, .closeView").on("click",function(){
    $("#viewModal").css("display","none");
 });

 $(".delete-icon").on("click",function(){
    
      target = $(this).attr("data-id"); 

    $("#delete-prompt").css("display","block");

});

$("#cancelDel, .closeDeletion").on("click",function(){
    $("#delete-prompt").css("display","none");
});

// #deleteBtn
$("#deleteBtn").on("click",function(){
    
   $.ajax("/deleteTreatment/" + target,{

      type:"DELETE"

   }).then((response)=>{

      target = "";
   });

});

})
