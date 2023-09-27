const popup = document.getElementById("subscribe-modal");
const closePopup = document.querySelector(".modal__close");

function getCookie(name) {
    let value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
} 

if(getCookie("closedOnce") !== "true"){
    popup.classList.add("modal_active");
}

closePopup.addEventListener("click", () => {
    popup.classList.remove("modal_active");
    document.cookie = "closedOnce=true; path=/";
});