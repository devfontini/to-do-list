// Seleciona os elementos HTML
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Adiciona tarefa ao clicar no botão
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">X</button>
        `;

        // Adiciona a tarefa na lista
        taskList.appendChild(taskItem);

        // Limpa o input
        taskInput.value = "";

        // Adiciona funcionalidade ao botão de remover
        taskItem.querySelector(".remove-btn").addEventListener("click", () => {
            taskItem.remove();
        });
    } else {
        alert("Por favor, digite uma tarefa válida!");
    }
});

// Permite adicionar tarefa pressionando Enter
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTaskBtn.click();
    }
});
