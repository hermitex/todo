let form = document.querySelector("#form");
const listItems = document.querySelectorAll(".task-item");
let tbody = document.querySelector("tbody");
const editButton = document.createElement("button");
//mh
// On app load, get all tasks from localStorage
//mh
//const controlBtns = document.querySelectorAll(".btn");
//create the item
function addTask(task) {
  let tr = document.createElement("tr"); //<li></li>
  let tdId = document.createElement("td");
  let tdTaskName = document.createElement("td");
  tdTaskName.classList.add('task-name');
  let tdActions = document.createElement("td");
  let tableBody = document.querySelector("tbody");
  const spanEl = document.createElement("span");
  const delButton = document.createElement("button");
  const editButton = document.createElement("button");
  //add the class task-item to the newly created li
  tr.classList.add("task-item");
  tdId.textContent = new Date().getMilliseconds().toString();
  tdTaskName.textContent = task; //<li>task 1</li>
 
  /*Element.append() allows you to 
    also append string objects*/
  //table.append(tr);
  tr.appendChild(spanEl);
 
  //Delete
  delButton.addEventListener("click", deleteTodo);
  delButton.classList.add("btn");
  delButton.classList.add("delete");
  delButton.innerHTML = "Delete";
  /* a click event and pass in a callback function. Do not invoke it immediately. 
  Just pass the function name as bellow. */

  //mh add edit button
  
  editButton.classList.add("btn");
  editButton.classList.add("edit");
  editButton.innerHTML = "Edit";
  /* a click event and pass in a callback function. 
  Do not invoke it immediately. 
  Just pass the function name as bellow. */
  editButton.addEventListener("click", editTodo);
  //saveButton.addEventListener("click", saveTodo);
  spanEl.append(delButton);
  spanEl.append(editButton);
  tdActions.append(spanEl);

  tr.appendChild(tdId)
  tr.appendChild(tdTaskName)
  tr.appendChild(tdActions)
  //mh add edit button
  tableBody.appendChild(tr);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let value = document.querySelector("#task").value;
  let db = localStorage;

  let data {
    
  }

 
  console.log(value);
  //add the inputted task
  addTask(value);
});

// Define the callback functions here and write the logic
const editTodo = (event) => {
  editableItem = event.target.parentNode.parentNode.parentNode.querySelector(".task-name");
  console.log(editableItem.children);
  editableItem.contentEditable = true;
  editableItem.style.backgroundColor = "#6d529a";
  editButton.innerHTML = "Save";
  editButton.contentEditable = false; 
  //let storedValue = localStorage.getItem(editableItem);

  //console.log(event.target.parentNode.parentNode);
};
                                                                    
const deleteTodo = (event) => {
  let typeOfBtn = event.target.classList;
  console.log(event.target.parentNode);
  if (typeOfBtn.contains("delete")) {
    let parent = event.target.parentNode.parentNode.parentNode;
    tbody.removeChild(parent);
  }
};
