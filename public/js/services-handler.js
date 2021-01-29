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

      console.log(response.service_name);

      $("#view_service_name").text(response.service_name);

      $("#view_service_cost").text(response.service_cost);
      $("#view_service_observations").text(response.service_observations);
      
      $("#viewModal").css("display","block");
   });



   

});

$(".edit-icon").on("click",function(){

   let id = $(this).attr("data-id"); 
   target=id;
   
   $.ajax("/viewService/"+id,{

      type:"GET"

   }).then((response)=>{

      

      $("#edit_service_name").val(response.service_name);
      $("#edit_service_cost").val(response.service_cost);
      $("#edit_service_observations").val(response.service_observations);



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

$("#saveEdit").on("click",function(event){

   let Service = {

      name: $("#edit_service_name").val(),
      cost: parseInt($("#edit_service_cost").val()),
      observations:$("#edit_service_observations").val(),
     
   };
   $.ajax("/updateService/" + target,{
      type:"PUT",
      data:Service,
   }).then((response)=>{

      target= "";
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

$("#cancelDel, .closeDeletion, #deleteBtn").on("click",function(){
    $("#delete-prompt").css("display","none");
});

// #deleteBtn
$("#deleteBtn").on("click",function(){
    
   $.ajax("/deleteService/" + target,{

      type:"DELETE"

   }).then((response)=>{
      console.log("siii" + response)
    console.log("service deleted");
    window.location.replace("/services");
   });

});


});