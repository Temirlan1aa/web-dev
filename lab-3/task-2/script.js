const form = document.getElementById("input");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const deleteIcon = "/lab3/task2/assets/trash-can-logo.png";

let tasks = [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task-item");

    if (task.completed) {
      li.classList.add("completed");
    }

    const left = document.createElement("div");
    left.classList.add("task-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      renderTasks();
    });

    const text = document.createElement("span");
    text.textContent = task.text;
    text.classList.add("task-text");

    const deleteBtn = document.createElement("img");
    deleteBtn.src = deleteIcon;
    deleteBtn.alt = "delete";
    deleteBtn.classList.add("task-delete");

    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      renderTasks();
    });

    left.appendChild(checkbox);
    left.appendChild(text);

    li.appendChild(left);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) return;

  if (taskText.toLowerCase() === "1point for this student complete") {
    alert("Yes");
    input.value = "";
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);

  input.value = "";
  renderTasks();
});
