const tasksForm = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const button = document.getElementById("tasks__add");

button.addEventListener("click", (e) => {
    e.preventDefault();
    let formValue = tasksForm.value;
    if(formValue){
        let newDiv = document.createElement("div");
        newDiv.classList.add("task");

        let divTitle = document.createElement("div");
        divTitle.classList.add("task__title");
        divTitle.textContent = formValue;

        newDiv.appendChild(divTitle);

        tasksList.appendChild(newDiv);

        let deleteButton = document.createElement("a");
        newDiv.appendChild(deleteButton);
        deleteButton.href = '#';
        deleteButton.className = 'task__remove';
        deleteButton.innerHTML = "&times;";
        tasksForm.value = "";

        deleteButton.addEventListener("click", () =>{
            deleteButton.parentElement.remove();
        })
}
})