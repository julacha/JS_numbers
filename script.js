let board = document.querySelector(".board");

for (let i = 1; i <= 42; i++) {
  let element = document.createElement("div");
  element.classList.add("cell");
  element.textContent = i;

  element.addEventListener("click", function () {
    //element.querySelector("span").textContent = "i";
  });
  board.append(element);

  //console.log(i);

  if (i % 2 === 0) {
    element.classList.add("color");
  }

  if (i % 3 === 0) {
    element.addEventListener("click", function () {
      element.textContent = Number(element.textContent) + 1;
    });
  }
}

let add = document.querySelector(".button");
let count = 43;

for (let i = 43; i <= count; i++) {
  add.addEventListener("click", function () {
    addButton(count++);
});
}

function addButton(i) {
  let newNumber = document.createElement("div");
  newNumber.classList.add("cell");
  newNumber.textContent = i;
  board.append(newNumber);
}

