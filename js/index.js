const multiplyBtn = document.getElementById("multiply-btn"),
    addBtn = document.getElementById("add-btn"),
    subtractBtn = document.getElementById("subtract-btn"),
    divideBtn = document.getElementById("divide-btn"),
    equalBtn = document.getElementById("equal-btn"),
    numInput = document.getElementById("number-input");

var num1 = 0,
    num2 = 0,
    operation = 0;

// Set variable "num1" and "operation" to finish it up with the "number2" function

addBtn.addEventListener("click", function number1Add(){
    num1 = parseInt(numInput.value);
    numInput.value = ("");
    numInput.focus();
    operation = 0;
});

subtractBtn.addEventListener("click", function number1Sub(){
    num1 = parseInt(numInput.value);
    numInput.value = ("");
    numInput.focus();
    operation = 1;
});

multiplyBtn.addEventListener("click", function number1Mul(){
    num1 = parseInt(numInput.value);
    numInput.value = ("");
    numInput.focus();
    operation = 2;
});

divideBtn.addEventListener("click", function number1Div(){
    num1 = parseInt(numInput.value);
    numInput.value = ("");
    numInput.focus();
    operation = 3;
});

// If enter or equal is pressed it runs the function "number2"

equalBtn.addEventListener("click", number2);

numInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      number2();
    }
});

function number2(){ // "sets" num2 and depending on previous "operation" does it and puts it in the text box

    num2 = parseInt(numInput.value);

    if (operation == 0){ // Addition
        numInput.value = (num1 + num2);
    }

    if (operation == 1){ // Subtraction
        numInput.value = (num1 - num2);
    }

    if (operation == 2){ // Multiplication
        numInput.value = (num1 * num2);
    }

    if (operation == 3){ // Division
        numInput.value = (num1 / num2);
    }

    numInput.focus();

}

