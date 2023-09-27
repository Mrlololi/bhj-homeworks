let signInForm = document.getElementById("signin__form");
let welcomeDiv = document.getElementById("welcome");
let userIdSpan = document.getElementById("user_id");
let signInDiv = document.getElementById("signin");

signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let formData = new FormData(signInForm);

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            signInDiv.style.display = "none";
            userIdSpan.textContent = data.user_id;
            welcomeDiv.style.display = "block";
        } else {
            alert("Неверные данные!");
        }
    })
    .catch((error) => {
        alert("Произошла ошибка при отправке!");
    });
});
