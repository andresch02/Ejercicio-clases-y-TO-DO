// Array para almacenar las tareas
let tasks = [];

// Función para agregar una nueva tarea
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const newTask = {
      text: taskText,
      completed: false
    };

    tasks.push(newTask);
    taskInput.value = '';

    updateTaskList();
  }
}

// Función para eliminar una tarea
function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskList();
}

// Función para marcar una tarea como completada
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  updateTaskList();
}

// Función para actualizar la lista de tareas en el DOM
function updateTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task.text;

    if (task.completed) {
      listItem.style.textDecoration = 'line-through';
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.onclick = () => deleteTask(index);

    const toggleButton = document.createElement('button');
    toggleButton.textContent = task.completed ? 'Marcar como pendiente' : 'Marcar como completada';
    toggleButton.onclick = () => toggleTask(index);

    listItem.appendChild(deleteButton);
    listItem.appendChild(toggleButton);

    taskList.appendChild(listItem);
  });
}

// Llama a esta función para mostrar las tareas iniciales, si las hubiera
updateTaskList();