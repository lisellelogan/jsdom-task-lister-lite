  // select form
  const taskForm = document.getElementById('create-task-form')
  // select container to put task
  const listTask = document.getElementById('tasks')

document.addEventListener("DOMContentLoaded", () => {
    // listen for submit 
  taskForm.addEventListener("submit", handleSubmit);
});

// preventDefault() in order to update DOM
function handleSubmit(event) {
  event.preventDefault()
  const newTask = document.getElementById('new-task-description').value
  listTask.innerHTML += `<li>${newTask}</li>`
}