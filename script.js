//global variables
let form = document.getElementById("myform");

let input = document.getElementById("input").value;

let btn = document.getElementById("submit");

let table = document.getElementById("table");


function createTable(amount) {
    for(i = 1; i <= amount; i++) {
        let newRow = document.createElement("tr");
     for (j = 1; j <= amount; j++) {
        let column = document.createElement("td");
        column.innerHTML = i + "," + j;
        newRow.innerHTML += column.outerHTML;
     }
     table.innerHTML += newRow.outerHTML;
    }
}

