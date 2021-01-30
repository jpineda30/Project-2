$(function () {

  // $("#menu").css("visibility", "hidden");
  //$("#menu").css("width", "0%");
  $("#login").css("width", "50%");
 
  $("#loginBtn").on("click", () => {
  
    // $("#login").css('background-color', 'white');
    // $(".fade").css("visibility", "hidden");

    // Getting references to our form and inputs
    var loginForm = $("#login");
    var userInput = $("#user-email");
    var userPassword = $("#user-password")

    // When the form is submitted, we validate there's an email and password entered
    var userData = {
      email: userInput.val().trim(),
      password: userPassword.val().trim()
    }
  
    if (!userData.email || !userData.password) {
      alert("Enter a valid email and password")
      return;
    } else {
      // loginUser(userData.email, userData.password);
      // userInput.val("");
      // userPassword.val("");

      $.ajax("/login", {
        type: "POST",
        data: userData
      }).then(function () {
        window.location.replace("/appointments");
        // If there's an error, log the error
      })
        .catch(function (err) {
          console.log(err);
        });
    }
     
})     
});
 
  
   