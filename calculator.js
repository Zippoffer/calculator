var add = document.getElementById("add")
var subtract = document.getElementById("subtract")
var divide = document.getElementById("divide")
var multiply = document.getElementById("multiply")
var answer = document.getElementById("answer")
var firstNum = document.getElementById("firstNum")
var secondNum = document.getElementById("secondNum")


add.addEventListener("click", function(event) {
	console.log("add", event);
	answer.innerHTML = parseInt(firstNum.value) + parseInt(secondNum.value);
});

subtract.addEventListener("click", function(event) {
	console.log("subtract", event);
	answer.innerHTML = firstNum.value - secondNum.value;
});

divide.addEventListener("click", function(event) {
	console.log("divide", event);
	answer.innerHTML = firstNum.value / secondNum.value;
});

multiply.addEventListener("click", function(event) {
	console.log("multiply", event);
	answer.innerHTML = firstNum.value * secondNum.value;
});



// /*
//   Create a function that multiplies two numbers
//   passed in as arguments. Return the product.
//  */


// /*
//   Create a function that adds two numbers
//   passed in as arguments. Return the sum.
//  */



//   Create a function that subtracts two numbers
//   passed in as arguments. Return the difference.
 


// /*
//   Create a function that divides two numbers
//   passed in as arguments. Return the quotient.
//  */
