
document.addEventListener("DOMContentLoaded", () => {
 const form = document.querySelector("#create-task-form");
 form.addEventListener("submit", addTask);
 function addTask(e) {
   e.preventDefault();
   const tasks = document.getElementById("tasks");
   const newTaskDescriptuion = document.getElementById("new-task-description");
   const li = document.createElement("li");
   li.innerText = newTaskDescriptuion.value;
   tasks.appendChild(li);
 }
});
