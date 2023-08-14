const taskInput = document.getElementById("taskInput"); // getting the input field id
const addTaskBtn = document.getElementById("addTaskBtn"); // getting the button id
const taskList = document.getElementById("taskList"); // unordered list of tasks

addTaskBtn.addEventListener("click", () => { // adding event listener which is triggered when the button is clicked
  const taskText = taskInput.value.trim(); // storing the input value after trimming it from front and back
  if (taskText !== "") { // if any character is found
    const taskItem = document.createElement("li"); // a list item is created instantly
    taskItem.innerHTML = `
      <span>${taskText}</span> // creating string for embedding
      <button class="deleteBtn">Delete</button>
    `; // inside the list item , we created the span tag with the value and a delete button
    taskList.appendChild(taskItem); // li is appended to the ul
    taskInput.value = ""; // resetting the value after its use
    
    const deleteBtn = taskItem.querySelector(".deleteBtn"); // selecting the button 
    deleteBtn.addEventListener("click", () => { // adding event listener when button click is triggered
      taskList.removeChild(taskItem); // deleting that particular task
    });
  }
});
