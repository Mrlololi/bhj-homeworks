const Cookie = document.getElementById("cookie");
const CookieCount = document.getElementById("clicker__counter");
const CookiePerSecond = document.getElementById("clicker__Seconds");

let clicksPerSecond = 0;
let clickTotal = 0;
let clicksThisSecond = 0;

Cookie.onclick = function(){
   clickTotal++;
   clicksThisSecond++;
   CookieCount.textContent = clickTotal;

   if (clickTotal % 2 === 1){
       Cookie.width = 250;
       Cookie.length = 250;
   } else if (clickTotal % 2 === 0){
       Cookie.width = 200;
       Cookie.length = 200;
   }
}

setInterval(() => {
    clicksPerSecond = clicksThisSecond;
    CookiePerSecond.textContent = clicksPerSecond;
    clicksThisSecond = 0;
}, 1000)
