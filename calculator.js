let showButtonsPressed = document.getElementById("showButtonsPressed");
function moveToButtonsPressed(btn) {
  showButtonsPressed.innerText += btn.innerText;
}
function insteadOfEval(fn) {
  return new Function(
    "return " + fn
  )(); /*Using this function, because  Executing JavaScript from a string is an enormous security risk.
  It is far too easy for a bad actor to run arbitrary code when you use eval(). See Never use eval()!, below.*/
}
function equal() {
  let openCount = 0;
  let closeCount = 0;
  let array = showButtonsPressed.innerText.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "(") {
      openCount++;
    } else if (array[i] === ")") {
      closeCount++;
    }
  }
  if (openCount > closeCount) {
    alert("Missing -)-");
  } else if (closeCount > openCount) {
    alert("Missing -(-");
  } else {
    showButtonsPressed.innerText = insteadOfEval(showButtonsPressed.innerText);
  }
}
function forClearAll() {
  showButtonsPressed.innerText = "";
}

let num1 = document.getElementById("num1");
num1.addEventListener("click", moveToButtonsPressed.bind(null, num1));
let num2 = document.getElementById("num2");
num2.addEventListener("click", moveToButtonsPressed.bind(null, num2));
let num3 = document.getElementById("num3");
num3.addEventListener("click", moveToButtonsPressed.bind(null, num3));
let num4 = document.getElementById("num4");
num4.addEventListener("click", moveToButtonsPressed.bind(null, num4));
let num5 = document.getElementById("num5");
num5.addEventListener("click", moveToButtonsPressed.bind(null, num5));
let num6 = document.getElementById("num6");
num6.addEventListener("click", moveToButtonsPressed.bind(null, num6));
let num7 = document.getElementById("num7");
num7.addEventListener("click", moveToButtonsPressed.bind(null, num7));
let num8 = document.getElementById("num8");
num8.addEventListener("click", moveToButtonsPressed.bind(null, num8));
let num9 = document.getElementById("num9");
num9.addEventListener("click", moveToButtonsPressed.bind(null, num9));
let num0 = document.getElementById("num0");
num0.addEventListener("click", moveToButtonsPressed.bind(null, num0));
let plus = document.getElementById("operatorPlus");
plus.addEventListener("click", moveToButtonsPressed.bind(null, plus));
let minus = document.getElementById("operatorMinus");
minus.addEventListener("click", moveToButtonsPressed.bind(null, minus));
let multiply = document.getElementById("operatorMultiply");
multiply.addEventListener("click", moveToButtonsPressed.bind(null, multiply));
let divide = document.getElementById("operatorDivide");
let openBracket = document.getElementById("openBracket");
openBracket.addEventListener(
  "click",
  moveToButtonsPressed.bind(null, openBracket)
);
let closeBracket = document.getElementById("closeBracket");
closeBracket.addEventListener(
  "click",
  moveToButtonsPressed.bind(null, closeBracket)
);
let dot = document.getElementById("dot");
dot.addEventListener("click", moveToButtonsPressed.bind(null, dot));
divide.addEventListener("click", moveToButtonsPressed.bind(null, divide));
let equalBtn = document.getElementById("operatorEqual");
equalBtn.addEventListener("click", equal);
let clearAll = document.getElementById("clearAll");
clearAll.addEventListener("click", forClearAll);
