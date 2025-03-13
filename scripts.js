document.querySelector("input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        adicionar_tarefa();
    }
});

function adicionar_tarefa() {
    let valor_do_input = document.querySelector("input").value;

    if (valor_do_input.trim() === "") return; // Evita adicionar tarefas vazias


    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");


    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            li.classList.add("checked");
        } else {
            li.classList.remove("checked");
        }
    });


    let span = document.createElement("span");
    span.textContent = valor_do_input;


    let btnDelete = document.createElement("span");
    btnDelete.innerHTML = "❌";
    btnDelete.onclick = function () {
        deletar_tarefa(li);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnDelete);

    document.querySelector("ul").appendChild(li);

    // Limpa o input
    document.querySelector('input').value = "";
}

function deletar_tarefa(li) {
    li.remove();
}
