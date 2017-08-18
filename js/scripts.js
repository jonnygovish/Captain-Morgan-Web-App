//business logic







//user interface logic
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    //store user input
    var user = $("#userInput").val();
    //convert user input to integer
    var userInt = parseInt(user)
    console.log(userInt)
  });
});
