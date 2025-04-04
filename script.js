//global variables
let form = document.getElementById("myform");

let input = document.getElementById("input");

let btn = document.getElementById("submit");

let table = document.getElementById("table");

let reset = document.getElementById("resetBtn");

window.addEventListener("load", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let i = 1; i <= input.value; i++) {
      let tr = document.createElement("tr");
      for (let j = 1; j <= input.value; j++) {
        let td = document.createElement("td");
        td.textContent = `${i}  ${j}`;

        if ((i + j) % 2 === 0) {
          td.style.background = "#ccc";
        } else {
          td.style.background = "#0000";
        }
        tr.append(td);
      }
      table.append(tr);
    }
  });
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  form.reset();
  table.textContent = "";
});
