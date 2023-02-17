
localStorage.clear();

function createIconElement(type, icon, parent){
    
    let newIconSpan = document.createElement("span");
    newIconSpan.classList.add("task");
    newIconSpan.setAttribute("id", type);
    newIconSpan.setAttribute("onclick", `${type}Task(event)`);
    parent.appendChild(newIconSpan);

    let newIcon = document.createElement("i");
    newIcon.classList.add("fa-sharp", "fa-solid", icon);
    newIconSpan.appendChild(newIcon);
    return;
};

function addNewToDo2 (event){
    event.preventDefault();
   
    let task = document.getElementById("newTask2");

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
    
    createIconElement("delete", "fa-xmark", newDiv);
    createIconElement("edit", "fa-pen", newDiv);
    createIconElement("check", "fa-check" , newDiv);
    task.value = "";

    document.getElementById("exampleTask").style.visibility = 'hidden';
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

    if (localStorage.length === 0){
        document.getElementById("exampleTask").style.visibility = 'visible';
    }
};

////// edit a task
function editTask(event){

event.preventDefault();
let parent = event.currentTarget.parentElement;  

let textItem = parent.firstChild;
if (textItem.hasAttribute('disabled')){
    textItem.removeAttribute('disabled');
    textItem.focus();
} else {
    (textItem.disabled= 'true');
 };
//  textItem.onsubmit = replaceEditedTask(event);
};

//////  check that it's done
function checkTask(event){
    event.preventDefault();
    event.currentTarget.parentElement.classList.toggle("taskchecked"); 
    };


///////////
// function replaceEditedTask(event){
//         event.preventDefault();
//         event.currentTarget.disabled= 'true';
// }