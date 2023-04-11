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
const headingElement = document.getElementById("heading");

// floaring action buttons
// clicking on the plus reveals the tile and task buttons
plusSignElement.addEventListener("click", () => {
  titleElement.classList.toggle("title");
  taskElement.classList.toggle("task");
  plusSignElement.classList.toggle("fab-content-after");
});

// clicking on "adding a task" opens the task adding pop up window
taskElement.addEventListener("click", () => {
  containerElement.classList.toggle("blur");
  popUpWindowElement.classList.toggle("pop-up-open");
});

// clicking on the "add a title" task opens the title adding pop up window
titleElement.addEventListener("click", () => {
  containerElement.classList.toggle("blur");
  titlePopUpWindowElement.classList.toggle("pop-up-open");
});

// input frame for adding a task (called when clicking the "add" button)
function addingTask() {
  if (inputFieldElement.value === "") {
    // if the input field is empty just close the pop up window
    containerElement.classList.remove("blur");
    popUpWindowElement.classList.remove("pop-up-open");
  } else {
    // if there is input, create a list item with the removing x symbol to the list
    let li = document.createElement("li");
    li.innerHTML = inputFieldElement.value;
    listContainerElement.appendChild(li);

    let deleteCros = document.createElement("img");
    deleteCros.src = "images/lil-x.svg";
    li.appendChild(deleteCros);

    // closing the pop up
    containerElement.classList.remove("blur");
    popUpWindowElement.classList.remove("pop-up-open");

    saveTheTasks();
  }
  // empty input value when returning to the imput field
  inputFieldElement.value = "";
}

// input frame for adding a title (called when clicked "save" button)
function addingTitle() {
  if (titelInputFieldElement.value === "") {
    // if the input field is empty just close the pop up window
    containerElement.classList.remove("blur");
    titlePopUpWindowElement.classList.remove("pop-up-open");
  } else {
    // make the imput the title
    headingElement.innerText = titelInputFieldElement.value;

    // closing the pop up
    containerElement.classList.remove("blur");
    titlePopUpWindowElement.classList.remove("pop-up-open");

    saveTheTasks();
  }
  // empty input value when returning to the imput field
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

// saving tasks and the title to local storage
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

// source for the quote api https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373
// source for how to link the api https://www.youtube.com/watch?v=lpuBLpwgpp8&t=420s
function onLoad() {
  fetch("https://type.fit/api/quotes")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const randomQuote = response[Math.floor(Math.random() * 1643)];
      const quote = randomQuote.text;
      const author = randomQuote.author;

      const quoteElement = document.getElementById("inspirationalQuote");
      const authorElement = document.getElementById("quoteAuthor");

      quoteElement.innerText = quote;

      if (author === null) {
        authorElement.innerText = "- Unknown";
      } else {
        authorElement.innerText = "- " + author;
      }
    });
}

window.addEventListener("load", onLoad);
