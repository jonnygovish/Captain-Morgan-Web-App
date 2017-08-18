//business logic

function range(userInput) {
  var rangeArray = []
  for (var number = 1; number <= userInput; number++) {
    console.log(number)
    if ((number % 3 === 0) && (number % 5 === 0)) {
      rangeArray.push("captain morgan");
    } else if (number % 3 === 0) {
      rangeArray.push("captain");
    } else if (number % 5 === 0) {
      rangeArray.push("morgan")
    } else {
      rangeArray.push(number)
    }
  };
  console.log(rangeArray);
  return rangeArray
};

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    //store user input
    $("#display").empty();

    var user = $("#userInput").val();
    //convert user input to integer
    var userInput = parseInt(user)
    //console.log(range(userInput))
    var results = range(userInput)

    //Display
    results.forEach(function(result) {
      $("#display").append("<li>" + result + "</li>");
    });
  });
});
