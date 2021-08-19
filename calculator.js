
//---------=^.^=---------
// For operator buttons

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
            display.value = result;
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
