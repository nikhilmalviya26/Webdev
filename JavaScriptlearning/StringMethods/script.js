function addTask() {
  const newTask = document.getElementById("taskInput").value.trim();

  const LI = document.createElement("li");
  LI.classList.add("p-3");

  const SPAN = document.createElement("span");
  SPAN.textContent = newTask;

 const BUTTON1 = document.createElement("button1");
  BUTTON1.classList.add("btn",  "btn-sm", "ms-3");
  BUTTON1.textContent = "Edit";

BUTTON1.onclick = () => {
    let newTask = prompt("Edit your task:", SPAN.textContent);

    if (newTask !== null && newTask.trim() !== "") {
        SPAN.textContent = newTask.trim();
    }}

  const BUTTON = document.createElement("button");
  BUTTON.classList.add("btn", "btn-danger", "btn-sm", "ms-3");
  BUTTON.textContent = "Delete";
  BUTTON.onclick = () => LI.remove();

 

  LI.appendChild(SPAN);
 
  LI.appendChild(BUTTON1);
   LI.appendChild(BUTTON);

  document.getElementById("taskList").appendChild(LI);

  document.getElementById("taskInput").value = "";

}

document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});