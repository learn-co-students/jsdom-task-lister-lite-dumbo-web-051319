// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });


const form = document.getElementById("create-task-form")
const listItems = document.getElementById("tasks")

function removeItem(event){
  // console.log("hello from line 30")
  event.target.remove()
}


form.addEventListener("submit", function(event){
    event.preventDefault()
    const taskInfo = document.getElementById("new-task-description")
console.dir(taskInfo)
    console.log(typeof taskInfo)
    if (document.querySelector("value") === "High"){
      console.log("HI")
      let priority = taskInfo.style.color = "red"
    } else if (document.querySelector("value") === "Medium"){
      let priority = taskInfo.style.color = "yellow"
    } else {
      let prioriry = taskInfo.style.color = "green"
    }


    const formItem = document.createElement("li")
    formItem.innerText = taskInfo.value
    listItems.append(formItem)
    formItem.style.color = "green"
    formItem.addEventListener("click", removeItem)
})


