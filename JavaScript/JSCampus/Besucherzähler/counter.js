// init
let count = "0";

// counter element holen
const counter = document.getElementById("counterValue");

// increment function
function incrementCounter(){
    count = Number(localStorage.getItem("count"));
    counter.innerText = count;
    localStorage.setItem("count", count + 1);
}

// event listener
window.onload = incrementCounter();

// reset
const reset = document.getElementsByTagName("button")[0];
reset.addEventListener("click", () => {
    localStorage.setItem("count", "0");
    incrementCounter();
});