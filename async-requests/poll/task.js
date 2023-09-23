document.addEventListener("DOMContentLoaded", function() {
    async function getRandomPoll() {
        let response = await fetch("https://students.netoservices.ru/nestjs-backend/poll");
        let data = await response.json();

        if (data && data.data && data.data.title && data.data.answers) {
            document.getElementById("poll__title").innerText = data.data.title;

            let pollAnswersContainer = document.getElementById("poll__answers");
            pollAnswersContainer.innerHTML = "";

            data.data.answers.forEach(answer => {
                let answerButton = document.createElement("button");
                answerButton.classList.add("poll__answer");
                answerButton.innerText = answer;
                
                answerButton.onclick = function() {
                    alert("Спасибо, ваш голос засчитан!");
                    getRandomPoll();
                };

                pollAnswersContainer.appendChild(answerButton);
            });
        }
    }

    getRandomPoll();
});