//global variables
let form = document.getElementById("myform");

let input = document.getElementById("input");

let btn = document.getElementById("submit");

let table = document.getElementById("table");

let column;
let row;

// function createTable(amount) {
//     for(i = 1; i <= amount; i++) {
//         let newRow = document.createElement("tr");
//      for (j = 1; j <= amount; j++) {
//         let column = document.createElement("td");
//         column.innerHTML = i + "," + j;
//         newRow.innerHTML += column.outerHTML;
//      }
//      table.innerHTML += newRow.outerHTML;
//     }
// }

// function updateTable(event) {
//     event.preventDefault();
//     if (input.value == " ") {
//         table.innerHTML = " ";
//         createTable(input.value);
//     }
// }

// form.addEventListener("submit", function (event) {
//     updateTable(event);
// })

// window.addEventListener("load", function() {
//     createTable(15);
// })




btn.addEventListener("submit", (e) => {
    e.preventDefault();
    for(let i = 1; i <= row; i++) {
       row.push[i];
       for(let j = 1; j <= column; j++) {
       column.push[j];
       }
      table.textContent += row + ", " + column;
    }
    table.textContent = " ";
    

   function update() {
    if (input.value == " ") {
        table.textContent == " ";
        
    }
   }  


})