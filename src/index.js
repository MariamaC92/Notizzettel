
let addNewToDo = function(event){
    event.preventDefault();
    let task = document.getElementById("newToDo");
    let table = document.getElementById("table");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = task.value; 
    row.classList.add("task");
    task.value = "";
    // let cell2 = row.row.insertCell(1);  //for delete button
    // let cell3 = row.row.insertCell(2);  //for edit button
    // let cell4 = row.row.insertCell(3);  //for check button
};

const form = document.getElementById("form");
form.addEventListener('submit', addNewToDo);


//////////now the version with the div instead of the table, sorry for the confusion

let addNewToDo2 = function(event){
    event.preventDefault();

    let task = document.getElementById("newTask2");
    //create new div
    let newDiv = document.createElement("div");
    newDiv.classList.add("task");
    newDiv.innerText = task.value;
    document.getElementById("black-field2").appendChild(newDiv);
    task.value = "";
};

const form2 = document.getElementById("newToDoButton2");
form2.addEventListener('click', addNewToDo2);

