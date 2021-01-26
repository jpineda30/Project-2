$(function(){
    
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

      $("#view_patient_name").text(response.first_name);

      $("#viewModal").css("display","block");
   });



   

});

$("#edit-icon").on("click",function(){
    
    $("#editModal").css("display","block");

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

      alert("success!");
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
   // Initialize all input of date type.
   const calendars = bulmaCalendar.attach('[type="date"]', options);

// Loop on each calendar initialized
   calendars.forEach(calendar => {
	// Add listener to select event
	calendar.on('select', date => {
		console.log(date);
	});
});

// To access to bulmaCalendar instance of an element
const element = document.querySelector('#main-calendar');
if (element) {
	// bulmaCalendar instance is available as element.bulmaCalendar
	element.bulmaCalendar.on('select', datepicker => {
		console.log(datepicker.data.value());
	});
}
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


})
