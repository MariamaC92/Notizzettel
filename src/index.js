localStorage.clear();

function createIconElement(type, icon, parent) {
  let newIconSpan = document.createElement("span");
  newIconSpan.classList.add("task");
  newIconSpan.setAttribute("id", type);
  newIconSpan.setAttribute("onclick", `${type}Task(event)`);
  parent.appendChild(newIconSpan);

  let newIcon = document.createElement("i");
  newIcon.classList.add("fa-sharp", "fa-solid", icon);
  newIconSpan.appendChild(newIcon);
  return;
}

function addNewToDo2(event) {
  
    event.preventDefault();
   let task = document.getElementById("newTask2");


  //localStorage
  function createLocalStorage () {
      if (localStorage.length === 0) {
          return 1;
      } else {
          let keys = Object.keys(localStorage);
          let keysNumbers = keys.map(element => parseInt(element, 10));
          let highestKey = (Math.max.apply(Math, keysNumbers)) + 1; //parseInt ist quasi string2num
          return highestKey;
      };
  };

  let highestKey = createLocalStorage();
  localStorage.setItem(highestKey, task.value);

  //create new div for a new Task
  let newDiv = document.createElement("div");
  newDiv.classList.add("newTask");
  newDiv.setAttribute("id", `${task.value}-${highestKey}`); // Sonderzeichen? UTF-8?
  document.getElementById("black-field2").appendChild(newDiv);

  //create element with task description
  let newText = document.createElement("input");
  newText.classList.add("description");
  newText.setAttribute("id", `description-${highestKey}`);
  newText.setAttribute("onsubmit", "editTaskAndStorage()");
  newText.disabled = "true";
  newText.value = task.value;
  newDiv.appendChild(newText);

  createIconElement("delete", "fa-xmark", newDiv);
  createIconElement("edit", "fa-pen", newDiv);
  createIconElement("check", "fa-check", newDiv);
  task.value = "";

  document.getElementById("exampleTask").style.visibility = "hidden";
}

const form2 = document.getElementById("form2");
form2.addEventListener("submit", addNewToDo2);

/////// delete a task
function deleteTask(event) {
  event.preventDefault();
  let parent = event.currentTarget.parentElement;
  expression = /(\d*)$/;
  let storageIndex = parent.id.match(expression);
  storageIndex = [...new Set(storageIndex)];   // finds unique values!
  localStorage.removeItem(storageIndex);
  parent.remove();

  if (localStorage.length === 0) {
    document.getElementById("exampleTask").style.visibility = "visible";
  }
};

//////  check that it's done
function checkTask(event) {
    event.preventDefault();
    event.currentTarget.parentElement.classList.toggle("taskchecked");
  };

////// edit a task
function editTask(event) {
  event.preventDefault();
  let parent = event.currentTarget.parentElement;

  let textItem = parent.firstChild;
  if (textItem.hasAttribute("disabled")) {
    textItem.removeAttribute("disabled");
    textItem.focus();
  } else {
    textItem.disabled = "true";
    //find the task in the localStorage and change it there
    const expression = /(\d*)$/;  
    let storageIndex = textItem.id.match(expression);
    storageIndex = [...new Set(storageIndex)];   // finds unique values!
    localStorage.setItem(storageIndex, textItem.value);
    }
};
