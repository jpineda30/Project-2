$(function () {

    var userForm = $("#user-creation").css("width", "50%");
     var userFirstName = $("#user_name");
     var userLastName = $("#user_last_name");
     var userEmail = $("#user_email");
     var userPassword = $("#user_password");

    // $("#menu").css("visibility", "hidden");
    //$("#menu").css("width", "0%");
    $("#login").css("width", "50%");
    
    $("#signup").on("click",()=>{
        $("#myModal").css("display","block");
    });

    $(".close, #cancelBtn").on("click",function(){
        $("#myModal").css("display","none");
     });


  $("#login").css("width", "50%");
 
  $("#loginBtn").on("click", () => {
  
    // $("#login").css('background-color', 'white');
    // $(".fade").css("visibility", "hidden");

    // Getting references to our form and inputs
    var loginForm = $("#login");
    var userInput = $("#user-email");
    var userPassword = $("#user-password")

    // When the form is submitted, we validate there's an email and password entered
    var userData2 = {
      email: userInput.val().trim(),
      password: userPassword.val().trim()
    }
  
    if (!userData2.email || !userData2.password) {
      alert("Enter a valid email and password")
      return;
    } else {
      // loginUser(userData2.email, userData2.password);
      // userInput.val("");
      // userPassword.val("");

      $.ajax("/login", {
        type: "POST",
        data: userData2
      }).then(function () {
        window.location.replace("/appointments");
        // If there's an error, log the error
      })
        .catch(function (err) {
          console.log(err);
        });
    }
     
})  

    // $("#menu").css("visibility", "hidden");
     //$("#menu").css("width", "0%");
     
 
  $("#userCreate").on("click", () => {
    
    let userData = {
        first_name: userFirstName.val().trim(),
        last_name: userLastName.val().trim(),
        email: userEmail.val().trim(),
        password: userPassword.val().trim()
      }

      if (!userData.email || !userData.password || !userData.first_name || !userData.last_name)
      {
          alert("fill all fields");
      }
      else
      {    $.ajax("/signup", {
            type: "POST",
            data: userData
            })
                .then(function (data) {
                $("#myModal").css("display","none");
                signUpUser();
            // If we have an email and password we run the loginUser function and clear the form
            //signUpUser(userData.first_name,userData.last_name, userData.email, userData.password);
            
            });}

         
         function signUpUser() {
              // .catch(handleLoginErr);
            }
            userFirstName.val("");
            userLastName.val("");
            userEmail.val("");
            userPassword.val("");
                 // window.location.replace("/members");
                 // If there's an error, handle it by throwing up a bootstrap alert
               })








  });