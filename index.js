let counter = document.querySelector("#counter");
const increase = document.querySelector("#increase");
const save = document.querySelector(".save");
const saveEl = document.querySelector(".saved-el");


let count = 0;
function add() {
    count +=1
    counter.innerText = count;
}
function saved() {
    let saveStr = count + " - "
    saveEl.textContent += saveStr;
}

