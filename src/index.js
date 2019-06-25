document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", addTask)

  function addTask(e){
    e.preventDefault()
    const tasks = document.getElementById("tasks");
    const newTaskDescription = document.getElementById("new-task-description")
    const li = document.createElement("li");
    const textnode = document.createTextNode(newTaskDescription.value);
    li.appendChild(textnode);
    tasks.appendChild(li);
  }
});

// HTML pages often use a submit button to submit a form to a server. When a user submits a form, the submit event is fired. An event handler here might pop up a thank you overlay, play a song, or provide some other sort of interactivity depending on what values were entered in the form.

// 1. pull off DOM
// 2. add event
// 3. change page
