var form = document.forms["form"];
var progressBar = document.getElementById("progress");
var fileInputDesc = document.querySelector(".input__wrapper-desc");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var fileInput = form.querySelector("#file");

    fileInputDesc.textContent = fileInput.files[0].name;

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
            progressBar.value = (event.loaded / event.total) * 100;
        }
    });

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204) {
                alert("Файл успешно загружен!");
            } else {
                alert("Что-то не так: " + xhr.statusText);
            }
        }
    });
    
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    const formData = new FormData(form);
    xhr.send(formData);
});