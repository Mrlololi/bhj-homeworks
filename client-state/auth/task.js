let signInForm = document.getElementById("signin__form");
let welcomeDiv = document.getElementById("welcome");
let userIdSpan = document.getElementById("user_id");
let signInDiv = document.getElementById("signin");

if (localStorage.getItem("UserID")) {
    signInDiv.style.display = "none";
    userIdSpan.textContent = localStorage.getItem("UserID");
    welcomeDiv.style.display = "block";
} else{
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
                localUserID = localStorage.setItem("UserID", data.user_id)
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
}