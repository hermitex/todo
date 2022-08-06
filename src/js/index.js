let form = document.querySelector("#form");

const listItems = document.querySelectorAll(".task-item");

let ul = document.querySelector("#task-list");

const controlBtns = document.querySelectorAll(".btn");

function addTask(task) {
  let li = document.createElement("li"); //<li></li>

  //add the class task-item to the newly created li
  li.classList.add("task-item");
  li.textContent = task; //<li>task 1</li>
  let ul = document.querySelector("#task-list");
  /*Element.append() allows you to 
    also append string objects*/
  ul.appendChild(li); //why not just append
  const spanEl = document.createElement("span");
  li.appendChild(spanEl);
  //mh add delete button
  const delButton = document.createElement("button");
  delButton.classList.add("btn");
  delButton.classList.add("delete");
  delButton.innerHTML = "Delete";

  /* a click event and pass in a callback function. Do not invoke it immediately. 
  Just pass the function name as bellow. */
  delButton.addEventListener("click", deleteTodo);
  //mh add edit button
  const editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.classList.add("edit");
  editButton.innerHTML = "Edit";
  /* a click event and pass in a callback function. 
  Do not invoke it immediately. 
  Just pass the function name as bellow. */
  editButton.addEventListener("click", editTodo);

  spanEl.append(delButton);
  spanEl.append(editButton);
  //mh add edit button
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let value = document.querySelector("#task").value;
  console.log(value);
  //add the inputted task
  addTask(value);
});

//manipulating list items
// console.log(controlBtns)
// for (let i = 0; i < controlBtns.length; i++) {
//     alert(1)
//     controlBtns[i].addEventListener('click', function(event){
//         let typeOfBtn = event.target.classList;
//         if(typeOfBtn.contains('delete')){
//             let parent = event.target.parentNode.parentNode;
//             ul.removeChild(parent);
//         }

//     })
// }

// Define the callback functions here and write the logic
const editTodo = (event) => {
    editableItem = event.target.parentNode.parentNode;
    editableItem.contentEditable = true;
    editableItem.style.backgroundColor = "#dddbdb";
    console.log(event.target.parentNode.parentNode);
    };

const deleteTodo = (event) => {
    let typeOfBtn = event.target.classList;
    console.log(event.target.parentNode);
  if (typeOfBtn.contains("delete")) {
    let parent = event.target.parentNode.parentNode;
    ul.removeChild(parent);
  }
};