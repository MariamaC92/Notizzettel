
localStorage.clear();

function addNewToDo2 (event){
    event.preventDefault();
   
    let task = document.getElementById("newTask2");

    // const toDo4List = new Task(task.value);
    localStorage.setItem(localStorage.length, task.value);
    

    //create new div for a new Task
    let newDiv = document.createElement("div");
    newDiv.classList.add("newTask");
    newDiv.setAttribute("id", `${task.value}-${localStorage.length-1}`); // Sonderzeichen? UTF-8?
    document.getElementById("black-field2").appendChild(newDiv);
    
    //create element with text
    let newText = document.createElement("input");
    newText.classList.add("description");
    newText.setAttribute("id", `description-${task.value}`);
    newText.disabled = 'true';
    newText.value = task.value;
    newDiv.appendChild(newText);
    

    //create the three icons:
    //delete icon
    let newDeleteIconSpan = document.createElement("span");
    newDeleteIconSpan.classList.add("task");
    newDeleteIconSpan.setAttribute("id", "delete");
    newDeleteIconSpan.setAttribute("onclick", "deleteTask(event)");
    
    newDiv.appendChild(newDeleteIconSpan);

    let newDeleteIcon = document.createElement("i");
    newDeleteIcon.classList.add("fa-sharp", "fa-solid", "fa-xmark");
    
    newDeleteIconSpan.appendChild(newDeleteIcon);

    //edit icon
    let newEditIconSpan = document.createElement("span");
    newEditIconSpan.classList.add("task");
    newEditIconSpan.setAttribute("id", "edit");
    newEditIconSpan.setAttribute("onclick", "editTask(event)");
    newDiv.appendChild(newEditIconSpan);
  
    let newEditIcon = document.createElement("i");
    newEditIcon.classList.add("fa-sharp", "fa-solid", "fa-pen");
    newEditIconSpan.appendChild(newEditIcon);

    //check icon
    let newCheckIconSpan = document.createElement("span");
    newCheckIconSpan.classList.add("task");
    newCheckIconSpan.setAttribute("id", "check");
    newCheckIconSpan.setAttribute("onclick", "checkTask(event)");
    newDiv.appendChild(newCheckIconSpan);
        
    let newCheckIcon = document.createElement("i");
    newCheckIcon.classList.add("fa-sharp", "fa-solid", "fa-check");
    newCheckIconSpan.appendChild(newCheckIcon);
    task.value = "";
};

const form2 = document.getElementById("form2");
form2.addEventListener('submit', addNewToDo2);



/////// delete a task
function deleteTask(event){
    event.preventDefault();
    let parent = event.currentTarget.parentElement;
    expression = /[0-9]$/;  
    let storageIndex = parent.id.match(expression);
    localStorage.removeItem(storageIndex);
    parent.remove();   
};

////// edit a task
function editTask(event){

event.preventDefault();
let parent = event.currentTarget.parentElement;  

let textItem = parent.firstChild;
if (textItem.hasAttribute('disabled')){
    textItem.removeAttribute('disabled');
} else {
    (textItem.disabled= 'true');
 };
};

//////  check that it's done
function checkTask(event){
    event.preventDefault();
    event.currentTarget.parentElement.classList.toggle("taskchecked"); 
    };

