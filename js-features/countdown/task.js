const time = document.getElementById("timer");
timerCount = 59;
const interval = setInterval(() => {
    if(timerCount > 0){
        timerCount -= 1;
        time.textContent = timerCount;
    } else if (timerCount === 0){
        alert("Вы победили в конкурсе");
        clearInterval(interval);
    }
}, 1000);