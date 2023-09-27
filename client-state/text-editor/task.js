let editor = document.getElementById("editor");
if(localStorage.getItem("editorText")){
    editor.value = localStorage.getItem("editorText")
}

editor.addEventListener("input", () => {
    localStorage.setItem("editorText", editor.value)
})