const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach(element => {
    let newElement = document.createElement("div");
    newElement.classList.add("tooltip");
    newElement.textContent = element.title;
    element.insertAdjacentElement("afterend", newElement);
    element.addEventListener("click", (e) => {
        newElement.classList.toggle("tooltip_active")
        e.preventDefault();
    })
});