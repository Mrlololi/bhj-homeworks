let editor = document.getElementById("editor");
if(localStorage.getItem("editorText")){
    editor.value = localStorage.getItem("editorText")
}

if(!localStorage.getItem("editorText")){
    editor.value = "Сотрите меня и я больше никогда не появлюсь - Это будет на вашей совести!"
}


editor.addEventListener("input", () => {
    localStorage.setItem("editorText", editor.value)
})