const tabAll = document.querySelectorAll(".tab");
const tabTextAll = document.querySelectorAll(".tab__content");

for(let i = 0; i < tabAll.length; i++){
    tabAll[i].addEventListener("click", function() {
        event.preventDefault();
        changeTab(tabAll[i]);
    });
}

function changeTab(newTab) {
    tabAll.forEach(tab => tab.classList.remove('tab_active'));
    tabTextAll.forEach(tabContent => tabContent.classList.remove('tab__content_active'));
  
    newTab.classList.add('tab_active');
  
    let index = Array.from(tabAll).indexOf(newTab);
    tabTextAll[index].classList.add('tab__content_active');
  }
  