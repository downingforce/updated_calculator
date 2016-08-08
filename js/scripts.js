//var number1 = parseInt(prompt("Give me a number"));

//var number2 = parseInt(prompt("Give me another number"));
//Function for Addition
var add = function(number1,number2) {return number1 + number2};

//Function for Subtracting
var subtract = function(number1,number2) {return number1 - number2};

//Function for Multiplication
var multiply = function(number1,number2) {return number1 * number2};

//Function for division
var divide = function(number1,number2) {return number1 / number2};

//var userHeight = parseInt(prompt("How tall are you in inches?"));
//var userWeight = parseInt(prompt("How much do you weigh?"));
//Function for BMI
var bmi = function(height, weight) {return ((weight / (height * height)) * 703);};

//var result = bmi(userHeight, userWeight).toFixed(2);
//var farenheit = parseInt(prompt("provide temperature in Farenheit"));
var celsius = parseInt(prompt("provide temperature in Celsius"));

//var faren_cels = function(faren) {return ((faren - 32)/1.8)};
var cels_faren = function(cel) {return (cel * 1.8 + 32)};

//var result_c = faren_cels(farenheit);
var result_f = cels_faren(celsius);

//alert(result_c);
alert(result_f);
