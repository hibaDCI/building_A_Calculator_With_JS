
//---------=^.^=---------
// For operator buttons

//for more DRY code with switch case 
const onBtnClick = () => {
  Array.from(allBtn).forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const containsOperator = (char) => display.value.endsWith(char);
      let isOperatorDisabled = (["+", "*", "/", "-", "%", "+/-"].some(containsOperator))
      console.log(btn.innerText, "is called")

      switch (btn.innerText) {
        case "c":
          display.value = ""
          break;
        case "+":
        case "-":
        case "/":
        case "%":
        case "*":
        case "+/-":
          if (display.value !== "" && !isOperatorDisabled) {
            (display.value += btn.innerText)
          }

          break;

        case "=":
          let result = eval(display.value)
          display.value = result.toFixed(2)

        default:
          console.log(btn.innerText)
          display.value += btn.innerText
      }
    })
  })
}

onBtnClick()




const display = document.querySelector("#display");

let btns = document.querySelectorAll(".btn");
console.log(btns);
Array.from(btns).forEach((btn) => {
  if (!btn.matches(".operator, .orange")) {
    btn.addEventListener("click", () => {
      display.value += btn.innerText;
    });
  }
});

// Hiba (feedback )
/////
//---------=^.^=---------
// For orange buttons

let btnsOrange = document.querySelectorAll(".orange");
console.log(btnsOrange);

Array.from(btnsOrange).forEach((btn) => {
  if (btn.matches(".orange")) {
    btn.addEventListener("click", () => {
      if (display.value !== "" && btn.innerText !== "=") {
        if (!display.value.endsWith(btn.innerText)) {
          display.value += btn.innerText;
        }
      }
    });
  }
});




//---------=^.^=---------
//function for evaluation
document.querySelectorAll(".orange").forEach((btn) => {
    if (btn.innerText === "=") {
        btn.addEventListener("click", () => {
            let result = eval(display.value.replace("x", "*"));
            display.value = result.toFixed(2);
        });
    }
});




//---------=^.^=---------
// For clear

let btnsOperator = document.querySelectorAll(".btn.operator");
console.log(btnsOperator);

Array.from(btnsOperator).forEach((btn) => {
  if (btn.innerText === "c") {
    btn.addEventListener("click", () => {
      display.value = "";
    });
  }
});
