const reveal = document.querySelectorAll(".reveal");

function visibility(){
for(let i = 0; i < reveal.length; i++){
    
        const elementTop = reveal[i].getBoundingClientRect().top;
        const elementBottom = reveal[i].getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if(elementTop < windowHeight && elementBottom > 0) {
            reveal[i].classList.add("reveal_active");
        } else {
            reveal[i].classList.remove("reveal_active");
        }
    }
}

window.addEventListener("scroll", visibility);