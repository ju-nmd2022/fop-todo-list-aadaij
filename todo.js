// getting all the elements needed from the html
const plusSignElement = document.getElementById("fab");
const titleElement = document.getElementById("title");
const taskElement = document.getElementById("task");
const containerElement = document.getElementById("backgroundBlur");
const popUpWindowElement = document.getElementById("taskPopUpWindow");
const titlePopUpWindowElement = document.getElementById("titlePopUpWindow");
const inputFieldElement = document.getElementById("inputField");
const listContainerElement = document.getElementById("listContainer");
const titelInputFieldElement = document.getElementById("inputFieldTitle");
const titleContainerElement = document.getElementById("titleContainer");
const headingElement = document.getElementById("heading");

// floaring action buttons
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
  titlePopUpWindowElement.classList.toggle("pop-up-open");
});

// input frame for adding a task
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

    saveTheTasks();
  }
  inputFieldElement.value = "";
}

// input frame for adding a title
function addingTitle() {
  if (titelInputFieldElement.value === "") {
    titleContainerElement.classList.remove("blur");
    containerElement.classList.remove("blur");
    titlePopUpWindowElement.classList.remove("pop-up-open");
  } else {
    headingElement.innerText = titelInputFieldElement.value;

    titleContainerElement.classList.remove("blur");
    containerElement.classList.remove("blur");
    titlePopUpWindowElement.classList.remove("pop-up-open");

    saveTheTasks();
  }
  titelInputFieldElement.value = "";
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
  localStorage.setItem("title", headingElement.innerHTML);
}

// getting the saved information form local storage
function getTasks() {
  listContainerElement.innerHTML = localStorage.getItem("tasks");
  if (localStorage.getItem("title") === null) {
    headingElement.innerHTML = "to do list";
  } else {
    headingElement.innerHTML = localStorage.getItem("title");
  }
}
getTasks();

// localStorage.clear();

// function onLoad() {
//   fetch("https://today.zenquotes.io/api/1/1").then((response) => {
//     console.log(response);
//   });
// }

// window.addEventListener("load", onLoad);

function loadFox() {
  const url = "https://zenquotes.io/api/image";
  const method = "GET";

  const foxRequest = new XMLHttpRequest();
  foxRequest.responseType = "json";
  foxRequest.open(method, url);
  foxRequest.addEventListener("load", finishedLoadingHandler);
  foxRequest.send();
  console.log(foxRequest);
}

function finishedLoadingHandler(event) {
  const finishedRequest = event.target;
  const response = finishedRequest.response;
  const foxUrl = response.image;

  const imgElement = document.createElement("img");
  imgElement.src = foxUrl;

  const bodyElement = document.querySelector("body");
  bodyElement.appendChild(imgElement);
}
loadFox();
