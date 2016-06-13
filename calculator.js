var add = document.getElementById("add")
var subtract = document.getElementById("subtract")
var divide = document.getElementById("divide")
var multiply = document.getElementById("multiply")
var answer = document.getElementById("answer")
var firstNum = document.getElementById("firstNum")
var secondNum = document.getElementById("secondNum")


add.addEventListener("click", function(event) {
	answer.value = firstNum + secondNum;
	console.log("add", event);
	answer.innerHTML = firstNum.value + secondNum.value;
});

subtract.addEventListener("click", function(event) {
	answer.value = firstNum - secondNum;
	console.log("subtract", event);
	answer.innerHTML = firstNum.value - secondNum.value;
});

divide.addEventListener("click", function(event) {
	answer.value = firstNum / secondNum;
	console.log("divide", event);
	answer.innerHTML = firstNum.value / secondNum.value;
});

multiply.addEventListener("click", function(event) {
	answer.value = firstNum * secondNum;
	console.log("multiply", event);
	answer.innerHTML = firstNum.value * secondNum.value;
});





// var numberOne;
// var numberTwo;
// var answer = document.getElementById("answer");

// var boxes= document.getElementsByClassName("textbox");
// var buttons= document.getElementsByClassName("button");


// console.log(buttons);
// console.log(boxes);
// for(i=0; i<boxes.length; i++){
//   boxes[i].addEventListener("keyup", updateNumbers);
// }
// for(i=0; i<buttons.length;i++){
//   buttons[i].addEventListener("click", eval(buttons[i].id));
//   console.log(buttons[i].id);
// }

// function updateNumbers(){
// numberOne = parseInt(document.getElementById("num1").value);
// numberTwo = parseInt(document.getElementById("num2").value);


// }

//   Create a function that multiplies two numbers
//   passed in as arguments. Return the product.
 
//  function multiply(){
//   answer.value=numberOne*numberTwo;
//  }


// /*
//   Create a function that adds two numbers
//   passed in as arguments. Return the sum.
//  */
//  function add(){
  
//   answer.value= numberOne+numberTwo;
//  }


// /*
//   Create a function that subtracts two numbers
//   passed in as arguments. Return the difference.
//  */
//  function subtract(){
//   answer.value=numberOne-numberTwo;
//  }


// /*
//   Create a function that divides two numbers
//   passed in as arguments. Return the quotient.
//  */
//  function divide(){
//   answer.value=numberOne/numberTwo;
//  }





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
