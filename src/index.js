
// let addNewToDo = function(event){
//     event.preventDefault();
//     let task = document.getElementById("task");
//     let table = document.getElementById("table");
//     let row = table.insertRow(1);
//     let cell1 = row.insertCell(0);
//     cell1.innerHTML = task.value; 
//     row.classList.add("task");
//     task.value = "";
//     // let cell2 = row.row.insertCell(1);  //for delete button
//     // let cell3 = row.row.insertCell(2);  //for edit button
//     // let cell4 = row.row.insertCell(3);  //for check button
// };

// const form = document.getElementById("form");
// form.addEventListener('submit', addNewToDo);


//////////now the version with the div instead of the table, sorry for the confusion

function addNewToDo2 (event){
    event.preventDefault();

    let task = document.getElementById("newTask2");

    //create new div for a new Task
    let newDiv = document.createElement("div");
    newDiv.classList.add("newTask");
    newDiv.setAttribute("id", task.value); // Sonderzeichen? UTF-8?
    document.getElementById("black-field2").appendChild(newDiv);
    
    //create element with text
    let newText = document.createElement("input");
    newText.classList.add("description");
    newText.setAttribute("id", `description-${task.value}`);
    newText.value = task.value;
    newDiv.appendChild(newText);
    

    //create the three icons:
    //delete icon
    let newDeleteIconSpan = document.createElement("span");
    newDeleteIconSpan.classList.add("task");
    newDeleteIconSpan.setAttribute("id", "delete");
    newDiv.appendChild(newDeleteIconSpan);

    let newDeleteIcon = document.createElement("i");
    newDeleteIcon.classList.add("fa-sharp", "fa-solid", "fa-xmark");
    newDeleteIconSpan.appendChild(newDeleteIcon);

    //edit icon
    let newEditIconSpan = document.createElement("span");
    newEditIconSpan.classList.add("task");
    newEditIconSpan.setAttribute("id", "edit");
    newDiv.appendChild(newEditIconSpan);
  
    let newEditIcon = document.createElement("i");
    newEditIcon.classList.add("fa-sharp", "fa-solid", "fa-pen");
    newEditIconSpan.appendChild(newEditIcon);

    //check icon
    let newCheckIconSpan = document.createElement("span");
    newCheckIconSpan.classList.add("task");
    newCheckIconSpan.setAttribute("id", "check");
    newDiv.appendChild(newCheckIconSpan);
        
    let newCheckIcon = document.createElement("i");
    newCheckIcon.classList.add("fa-sharp", "fa-solid", "fa-check");
    newCheckIconSpan.appendChild(newCheckIcon);
    task.value = "";
};

const form2 = document.getElementById("form2");
form2.addEventListener('submit', addNewToDo2);



/////// delete a task
const iconX = document.getElementById("delete");

function deleteTask(event){
    event.preventDefault();
    document.getElementById(iconX.parentElement.id).remove();  
};

iconX.addEventListener('click', deleteTask);

////// edit a task
const iconEdit = document.getElementById("edit");

function editTask(event){

event.preventDefault();
let parent = document.getElementById(iconEdit.parentElement.id);  

let textId = `description-${iconEdit.parentElement.id}`;
let textItem = document.getElementById(textId);

if (textItem.hasAttribute('disabled')){
    textItem.removeAttribute('disabled');
} else {
    (textItem.disabled= 'true');
};
};

iconEdit.addEventListener('click', editTask);

//////  check that it's done
const iconCheck = document.getElementById("check");

function checkTask(event){
    event.preventDefault();
    let parent = document.getElementById(iconX.parentElement.id);  
    parent.classList.toggle("taskchecked");
    };

iconCheck.addEventListener('click', checkTask);
