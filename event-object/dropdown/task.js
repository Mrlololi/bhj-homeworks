const dropdownList = document.querySelector(".dropdown__list");
const dropdownRealValue = document.querySelector(".dropdown__value");

document.addEventListener("click", dropdownListToggle)

function dropdownListToggle(){
    dropdownList.classList.toggle("dropdown__list_active")
}

const dropdownValue = document.querySelectorAll(".dropdown__link");

for(let i = 0; i < dropdownValue.length; i++){
    dropdownValue[i].addEventListener("click", function() {
        event.preventDefault();
        changeValue(dropdownValue[i].textContent);
    });
}

function changeValue(newValue){
    dropdownRealValue.textContent = newValue;
    dropdownList.classList.remove("dropdown__list_active");
}
