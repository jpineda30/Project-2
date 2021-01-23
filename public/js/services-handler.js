$(function(){
 
//target for deletion
 var target;  


// Modal events
$("#create-btn").on("click",function(){
    
     $("#myModal").css("display","block");
 
 });
 
 $(".view-icon").on("click",function(){
    
   let id = $(this).attr("data-id"); 
   
   $.ajax("/viewService/"+id,{

      type:"GET"

   }).then((response)=>{

      

      $("#view_service_name").text(response.name);

      $("#view_service_cost").text(response.cost);
      $("#view_service_observations").text(response.observations);
      
      $("#viewModal").css("display","block");
   });



   

});

$("#edit-icon").on("click",function(){

   let id = $(this).attr("data-id"); 
   
   $.ajax("/viewService/"+id,{

      type:"GET"

   }).then((response)=>{

      

      $("#edit_service_name").val(response.name);
      $("#edit_service_cost").val(response.cost);
      $("#edit_service_observations").val(response.observations);



      $("#editModal").css("display","block");
   });
    
   
});
 
 $(".close, #cancelCreate").on("click",function(){
    $("#myModal").css("display","none");
 });

 //save Service, send object
 $("#saveService").on("click",function(){

   let Service = {

      name: $("#service_name").val(),
      cost: $("#service_cost").val(),
      observations:$("#service_observations").val(),
     
   }

   $.ajax("/addService",{
      type:"POST",
      data:Service,
   }).then((response)=>{

      window.location.replace("/services");
   });

   console.log(Service);

   $("#myModal").css("display","none");
});

$("#saveEdit").on("click",function(){

   let Service = {

      name: $("#service_name").val(),
      cost: $("#service_cost").val(),
      observations:$("#service_observations").val(),
     
   }

   $.ajax("/updateService",{
      type:"PUT",
      data:Service,
   }).then((response)=>{

      
      window.location.replace("/services");

   });

   console.log(Service);

   $("#myModal").css("display","none");
});

 $(".closeEdit, #cancelEdit, #saveServiceEdit").on("click",function(){
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
    
   $.ajax("/deleteService/" + target,{

      type:"DELETE"

   }).then((response)=>{

      target = "";
   });

});

})
