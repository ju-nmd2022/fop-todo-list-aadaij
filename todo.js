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
