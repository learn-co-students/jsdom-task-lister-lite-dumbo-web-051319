document.addEventListener("DOMContentLoaded", () => {

  const taskForm =   document.querySelector('#create-task-form')
  const input = document.querySelector('#new-task-description')
  const ul = document.querySelector('#tasks')
  const list = document.querySelector('#list')

  //-------------------------- event -----------------------------

  taskForm.addEventListener('submit', postTask)
  list.addEventListener('click', handleClick)
  list.addEventListener('change', handleClick)

  function handleClick(e) {
    if (e.target.id === 'delete-btn') {
      deleteTask(e)
    } else if (e.target.id === 'priority-btn') {
      taskPriority(e)
    }
  }

  //---------------------------- dom slaps-------------------------

  function postTask(e) {
    e.preventDefault()
    ul.innerHTML += `
      <li>${input.value} <button id='delete-btn'>x</button>
      <select id='priority-btn'>
        <option value="" disabled selected>priority level</option>
        <option value="red">high priority</option>
        <option value="yellow">medium priority</option>
        <option value="green">low priority</option>
      </select>
      </li>
    `
    // taskForm.reset()
  }

  function deleteTask(e) {
      e.target.parentElement.remove()
  }

  function taskPriority(e) {
    const select = e.target
    const choice = select.selectedOptions[0].value
    // console.log(choice);
    // debugger
    e.target.parentElement.style.color = choice
    // console.log(e.target.parentElement.innerText)
    sortPriority()
  }

  function sortPriority() {
    console.log('hi')
    // const taskList = document.querySelector('#tasks')
    const allTasks = document.querySelectorAll('#list li')
    const highP = document.querySelector('#high-priority-tasks')
    const medP = document.querySelector('#medium-priority-tasks')
    const lowP = document.querySelector('#low-priority-tasks')
    // debugger
    for (const li of allTasks){
      switch(li.style.color) {
        case "red":
        highP.append(li)
        break;
        case "yellow":
        medP.append(li)
        break;
        case "green":
        lowP.append(li)
        break;
      }
      // console.log(li.style.color)
    }
    // debugger
  }

});
