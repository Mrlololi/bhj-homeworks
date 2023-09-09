const rotatorCase = document.querySelectorAll(".rotator__case");
let currentIndex = 0;

function infiniteLoop(){
        setInterval(() => {
            rotatorCase[currentIndex].classList.remove("rotator__case_active");

            currentIndex++;

            if(currentIndex === rotatorCase.length){
                currentIndex = 0;
            }

            rotatorCase[currentIndex].classList.add("rotator__case_active");
            rotatorCase[currentIndex].style.color = rotatorCase[currentIndex].getAttribute('data-color');
        }, 1000);


}

infiniteLoop()