const API_URL =
  "https://my-json-server.typicode.com/RubenJ27/M3U2TrelloApp-RubenJaramillo";

axios
  .get(`${API_URL}/tasks`)
  .then((res) => showAllTasks(res.data))
  .catch((err) => console.error(err));

const showAllTasks = (data) => {
  data.map((task) => createTask(task));
};

const createTask = (task) => {
  let newTask = document.createElement("article");
  newTask.classList.add("container__tasks__row");

  let taskTitle = document.createElement("h3");
  taskTitle.classList.add("container__task__title");
  taskTitle.innerText = task.title;

  let taskDetails = document.createElement("p");
  taskDetails.classList.add("card-task__details");
  taskDetails.innerHTML = `<span class="container__tasks__description__tittle">
  Descripcion:
</span>${task.details}`;

  let taskResponsive = document.createElement("p");
  taskResponsive.classList.add("card__task__resposinve");
  taskResponsive.innerHTML = `<span class="container__tasks__responsible__tittle">
  Responsible:
</span>${task.person}`;

  let taskDate = document.createElement("p");
  taskDate.classList.add("card-task__date");
  taskDate.innerHTML = `<div class="container__tasks__badges">
  <span class="container__task__badges__icons">
  <div class="container__task__badges__due-date">
    <span class="container__task__badges__due-date__icon"><i class="fa-solid fa-clock"></i></span>
    <span class="container__task__badges__due-date-text">Plazo: ${dateFormat(
      task.deadline
    )}</span>
  </div>
</span>
</div>`;

  let taskCreate = document.createElement("p");
  taskCreate.classList.add("card-task__date");
  taskCreate.innerHTML = `<span class="container__task__badges__icons">
  <div class="container__task__badges__due-date">
    <span class="container__task__badges__due-date__icon"><i class="fa-solid fa-clock"></i> Creacion: </span>
    <span class="container__task__badges__due-date-text">${dateFormat(
      task.created
    )}</span>
  </div>
</span>`;

  newTask.appendChild(taskTitle);
  newTask.appendChild(taskDetails);
  newTask.appendChild(taskResponsive);
  newTask.appendChild(taskDate);
  newTask.appendChild(taskCreate);

  let columnToDo = document.querySelector("#todoTasks");
  let columnInProgress = document.querySelector("#progressTasks");
  let columnDone = document.querySelector("#doneTasks");

  if (task.state === "to-do") {
    columnToDo.appendChild(newTask);
  }
  if (task.state === "in-progress") {
    columnInProgress.appendChild(newTask);
  }
  if (task.state === "done") {
    columnDone.appendChild(newTask);
  }
};
