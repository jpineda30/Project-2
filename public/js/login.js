$(function(){

   // $("#menu").css("visibility", "hidden");
    //$("#menu").css("width", "0%");
    $("#login").css("width", "50%");

    $("#loginBtn").on("click",()=>{
 
        $("#login").css('background-color','white');
        $(".fade").css("visibility", "hidden");

        setTimeout(function(){ window.location.replace("/patients"); }, 300);

       

    });

});