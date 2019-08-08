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


    const formItem = document.createElement("li")
    formItem.innerText = taskInfo.value
    listItems.append(formItem)

    console.log(event.target === form)
 
    if (form.priority.value === "High"){
      console.log("HI")
      formItem.style.color = "red"
    } else if (form.priority.value === "Medium"){
      formItem.style.color = "yellow"
    } else {
      formItem.style.color= "green"
    }
    formItem.addEventListener("click", removeItem)
})


