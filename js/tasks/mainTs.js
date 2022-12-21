import { Task } from './tasks.js';
import { tm } from "./taskManager.js";
const tasksDiv = document.getElementById("tasks");
const todoDescription = document.getElementById("todo-description");
const btnAddTodo = document.getElementById("btn-add-todo");
btnAddTodo.addEventListener('click', () => {
    let text = todoDescription.value;
    let task = new Task(text);
    tm.addTask(task);
    tasksDiv.replaceChildren();
    showAllTasks();
});
function showAllTasks() {
    for (let task of tm.tasks) {
        let row = document.createElement("div");
        row.classList.add("task", "row", "bg-primary");
        let input = document.createElement("input");
        input.placeholder = "";
        input.disabled = true;
        input.value = task.description;
        input.addEventListener("input", () => {
            task.description = input.value;
            tm.updateTask(task);
        });
        let btnEdit = document.createElement("button");
        btnEdit.classList.add("btn", "btn-info");
        btnEdit.innerHTML = ' <i class="fas fa-pencil"> edit</i>';
        btnEdit.addEventListener("click", () => {
            input.disabled = !input.disabled;
        });
        let btnDelete = document.createElement("button");
        btnDelete.classList.add("btn", "btn-danger");
        btnDelete.innerHTML = ' <i class="fas fa-trash"> delete</i>';
        btnDelete.addEventListener('click', () => {
            tm.removeTask(task.timeStamp);
            tasksDiv.removeChild(row);
        });
        const label = document.createElement('label');
        label.innerHTML = "uncompleted";
        label.classList.add("text-center", "bg-success");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                label.innerHTML = "completed";
            }
            else {
                label.innerHTML = "uncompleted";
            }
        });
        /* checkbox.checked = Status.Uncompleted */
        row.appendChild(input);
        row.appendChild(btnEdit);
        row.appendChild(btnDelete);
        row.appendChild(label);
        row.appendChild(checkbox);
        tasksDiv.appendChild(row);
        todoDescription.value = "";
    }
}
