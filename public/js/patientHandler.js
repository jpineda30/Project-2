$(function(){
 
//target for deletion
 var target;  


// Modal events
$("#create-btn").on("click",function(){
    
     $("#myModal").css("display","block");
 
 });
 
 $(".view-icon").on("click",function(){
    
   let id = $(this).attr("data-id"); 
   
   $.ajax("/viewPatient/"+id,{

      type:"GET"

   }).then((response)=>{

      console.log(response.first_name);

      $("#view_patient_name").text(response.first_name + " " + response.last_name);

/*       if(response.sex)
         {$("#view_patient_sex").text("Male");}
      else
         {$("#view_patient_sex").text("Female");} */
      $("#view_patient_email").text(response.email);
      $("#view_patient_phone").text(response.phone_number);
      $("#view_patient_sex").text(response.sex);
      $("#view_patient_age").text(response.age);
      $("#view_patient_allergies").text(response.allergies);
      $("#view_patient_diseases").text(response.previous_diseases);
      $("#view_patient_medication").text(response.current_medication);
      $("#view_patient_observations").text(response.patient_observations);

      $("#viewModal").css("display","block");
   });



   

});

$("#edit-icon").on("click",function(){

   let id = $(this).attr("data-id"); 
   target = id;
   $.ajax("/viewPatient/"+id,{

      type:"GET"

   }).then((response)=>{

      

      $("#edit_patient_name").val(response.first_name);
      $("#edit_patient_last_name").val(response.last_name);
      $("#edit_patient_email").val(response.email);
      $("#edit_patient_phone").val(response.phone_number);
/*       if(response.sex)
         {$("#edit_patient_sex").val("Male");}
      else
         {$("#edit_patient_sex").val("Female");}; */
      $("#view_patient_sex").text(response.sex);
      $("#edit_patient_age").val(response.age);
      $("#edit_patient_diseases").val(response.previous_diseases);
      $("#edit_patient_medication").val(response.current_medication);
      $("#edit_patient_allergies").val(response.allergies);
      $("#edit_patient_observations").val(response.patient_observations);

      $("#editModal").css("display","block");
   });
    
   
});
 
 $(".close, #cancelCreate").on("click",function(){
    $("#myModal").css("display","none");
 });

 //save patient, send object
 $("#savePatient").on("click",function(){

   let patient = {

      first_name: $("#patient_name").val(),
      last_name: $("#patient_last_name").val(),
      email:$("#patient_email").val(),
      phone_number:$("#patient_phone").val(),
      sex:$("#patient_sex").val(),
      age:$("#patient_age").val(),
      previous_diseases:$("#patient_diseases").val(),
      current_medication:$("#patient_medication").val(),
      allergies:$("#patient_allergies").val(),
      patient_observations:$("#patient_observations").val()
   }

   $.ajax("/addPatient",{
      type:"POST",
      data:patient,
   }).then((response)=>{

      window.location.replace("/patients");
   });

   console.log(patient);

   $("#myModal").css("display","none");
});

$("#saveEdit").on("click",function(){

   let patient = {


      first_name:$("#edit_patient_name").val(),
      last_name:$("#edit_patient_last_name").val(),
      email:$("#edit_patient_email").val(),
      phone_number: $("#edit_patient_phone").val(),
      sex:$("#edit_patient_sex").val(),
      age:$("#edit_patient_age").val(),
      previous_diseases:$("#edit_patient_diseases").val(),
      current_medication:$("#edit_patient_medication").val(),
      allergies:$("#edit_patient_allergies").val(),
      patient_observations:$("#edit_patient_observations").val(),

   }

   $.ajax("/updatePatient/" + target,{
      type:"PUT",
      data:patient,
   }).then((response)=>{

      target = "";
      window.location.replace("/patients");

   });

   console.log(patient);

   $("#myModal").css("display","none");
});

 $(".closeEdit, #cancelEdit, #saveEdit").on("click",function(){
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
   
   $.ajax("/deletePatient/" + target,{

      type:"DELETE"

   }).then((response)=>{

      console.log("deleted");
      window.location.replace("/patients");

   });

});

})
