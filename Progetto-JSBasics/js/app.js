//Setting button

const buttonsWrapper = document.getElementById("buttons");
const display = document.getElementById("display");

const increase = document.createElement("button");
const restart = document.createElement("button");
const decrease = document.createElement("button");
buttonsWrapper.append(decrease, restart, increase);

decrease.innerHTML = "-";
restart.innerHTML = 'Reset';
increase.innerHTML = '+';

//Setting starting point value =0

const startPoint = document.createElement("div");
let value = 0;
startPoint.innerHTML = value;
display.appendChild(startPoint);

//Adding  EventListener +, - and reset

increase.addEventListener("click", () => {
    value++;
   display.innerHTML= value;

});

decrease.addEventListener("click", () => {
    value--;
    display.innerHTML= value;
});

restart.addEventListener("click", () => {
    value=0;
    display.innerHTML= value;
});

// Adding Keyboard events

document.onkeydown = function (event)   {
 if (event.key === "ArrowDown") {
    display.innerHTML= --value;
  }
  else if (event.key === "ArrowUp") {
    display.innerHTML= ++value;
  }
  else if (event.key === "Delete") {
    display.innerHTML= (value=0);
  }
};
