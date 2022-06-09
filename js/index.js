const multiplyBtn = document.getElementById("multiply-btn"),
    addBtn = document.getElementById("add-btn"),
    subtractBtn = document.getElementById("subtract-btn"),
    divideBtn = document.getElementById("divide-btn"),
    equalBtn = document.getElementById("equal-btn"),
    numInput = document.getElementById("number-input"),
    prevAnsListBtn = document.getElementById("prev-answers"),
    prevAnsList = document.getElementById("prev-ans-list"),
    numberBtns = document.getElementsByClassName("number-btn");

var num1 = 0,
    num2 = 0,
    operation = 0,
    ans = 0,
    prevAns = [];
    showingAnswers = 0;

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
        ans = num1 + num2;
        numInput.value = (ans);
    }

    if (operation == 1){ // Subtraction
        ans = num1 - num2;
        numInput.value = (ans);
    }

    if (operation == 2){ // Multiplication
        ans = num1 * num2;
        numInput.value = (ans);
    }

    if (operation == 3){ // Division
        ans = num1 / num2;
        numInput.value = (ans);
    }

    numInput.focus();

    prevAns.push(ans)

}

prevAnsListBtn.addEventListener("click", function showList(){
    
    if(showingAnswers == 1){
        prevAnsList.innerHTML = ("");
        showingAnswers = 0;
    }

    else {
        for(let i = 0; i < prevAns.length; i++){
            var li = document.createElement("li")
            li.appendChild(document.createTextNode(prevAns[prevAns.length - i - 1]));
            prevAnsList.appendChild(li);
            showingAnswers = 1;
        }
    }
})

// Checks wether a number button is pressed and adds it to the textbox

  // Get all the buttons to an Array
  buttons = document.getElementsByClassName("number-btn")
  
  // Add click event listener to all button elements and insert their inner text as value to the text field
  Array.prototype.forEach.call (buttons, (button) => {
    button.addEventListener("click", () => {
      numInput.value += button.innerText
    })
  })
