$(function(){

    // $("#menu").css("visibility", "hidden");
     //$("#menu").css("width", "0%");
     var userForm = $("#user-creation").css("width", "50%");
     var userFirstName = $("#user_name");
     var userLastName = $("#user_last_name");
     var userEmail = $("#user_email");
     var userPassword = $("#user_password");
 
  $("#userCreate").on("click", (event) => {
    event.preventDefault();
    var userData = {
      first_name: userFirstName.val().trim(),
      last_name: userLastName.val().trim(),
      email: userEmail.val().trim(),
      password: userPassword.val().trim()
    }
    if (!userData.email || !userData.password) {
      return;
    }

    $.ajax("/signup", {
      type: "POST",
      data: userData
    })
      .then(function (data) {
       window.location.replace("/")
    
    // If we have an email and password we run the loginUser function and clear the form
    signUpUser(userData.first_name,userData.last_name, userData.email, userData.password);
    userFirstName.val("");
    userLastName.val("");
    userEmail.val("");
    userPassword.val("");
  });
         
         function signUpUser(email, password) {
              // .catch(handleLoginErr);
            }
        
                 // window.location.replace("/members");
                 // If there's an error, handle it by throwing up a bootstrap alert
               })
          // function handleLoginErr(err) {
          //   $("#alert .msg").text(err.responseJSON);
          //   $("#alert").fadeIn(500);
          // }
  // $.get("/user_data").then(function (data) {
  //   $(".user-name").text(data.first_name);
  // });
});

 
 
 