const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let counterHit = 0;
let counterMiss = 0;

const getHole = index => document.getElementById(`hole${index}`);
for (let holeIndex = 1; holeIndex <= 9; holeIndex++) {
    let hole = getHole(holeIndex);
    hole.addEventListener("click", function() {
        if (hole.classList.contains("hole_has-mole")) {
            counterHit++;
            dead.textContent = counterHit;
        } else {
            counterMiss++;
            lost.textContent = counterMiss;
        }
        
        if (counterHit == 10) {
            alert("Вы победили!");
            reset();
        } else if (counterMiss == 5) {
            alert("Вы проиграли!");
            reset();
        }
    });
}

function reset() {
    counterHit = 0;
    counterMiss = 0;
    dead.textContent = counterHit;
    lost.textContent = counterMiss;
}