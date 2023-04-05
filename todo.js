// floaring action buttons
const plusSignElement = document.getElementById("fab");
const titleElement = document.getElementById("title");
const taskElement = document.getElementById("task");
const containerElement = document.getElementById("backgroundBlur");
const popUpWindowElement = document.getElementById("taskPopUpWindow");

// clicking on the plus reveals the tile and task buttons
plusSignElement.addEventListener("click", () => {
  titleElement.classList.toggle("title");
  taskElement.classList.toggle("task");
  plusSignElement.classList.toggle("fab-content-after");
});

// clicking on adding a task opens the task adding window
taskElement.addEventListener("click", () => {
  containerElement.classList.toggle("blur");
  popUpWindowElement.classList.toggle("pop-up-open");
});

// clicking on the add a title task opens the title adding window
titleElement.addEventListener("click", () => {
  containerElement.classList.toggle("blur");
});

// input frame for adding a task
const inputFieldElement = document.getElementById("inputField");
const inputButtonElement = document.getElementById("inputButton");
const listContainerElement = document.getElementById("listContainer");

function addingTask() {
  if (inputFieldElement.value === "") {
    containerElement.classList.remove("blur");
    popUpWindowElement.classList.remove("pop-up-open");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputFieldElement.value;
    listContainerElement.appendChild(li);

    let deleteCros = document.createElement("img");
    deleteCros.src = "images/lil-x.svg";
    li.appendChild(deleteCros);

    containerElement.classList.remove("blur");
    popUpWindowElement.classList.remove("pop-up-open");
  }
  inputFieldElement.value = "";
}

// source https://www.youtube.com/watch?v=G0jO8kUrg-I
// marking tasks done and deleting them
listContainerElement.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
    saveTheTasks();
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveTheTasks();
  }
});

// saving tasks to local storage
function saveTheTasks() {
  localStorage.setItem("tasks", listContainerElement.innerHTML);
}

// getting the saved information form local storage
function getTasks() {
  listContainerElement.innerHTML = localStorage.getItem("tasks");
}
getTasks();
