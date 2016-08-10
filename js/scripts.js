// Business Logic

//Function for Addition
var add = function(number1,number2) {return number1 + number2};

//Function for Subtracting
var subtract = function(number1,number2) {return number1 - number2};

//Function for Multiplication
var multiply = function(number1,number2) {return number1 * number2};

//Function for division
var divide = function(number1,number2) {return number1 / number2};

// interface logic

$(document).ready(function() {
  // $("form#calc").submit(function(event) {
  //     event.preventDefault();
  //     var number1 = parseInt($("#add1").val());
  //     var number1 = parseInt($("#add1").val());
  //     var result = add(number1, number2);
  //     $("#output").text(result);
  //     alert($(this).attr("target"));
  // });
  $("#calc .btn").click(function(){
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var operation = $(this).get(0).id;
    if (operation === "add") {
       var result = add(number1, number2);
    }
    else if (operation === "subtract") {
      var result = subtract(number1, number2);
    }
    else if (operation === "multiply") {
      var result = multiply(number1, number2);
    }
    else {
      var result = divide(number1, number2);
    }
    $("#output").text(result);
    event.preventDefault();
  });
});
