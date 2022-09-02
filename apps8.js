const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const output = document.querySelector('.output');
let counter = 0;
const url = 'json8.json';

output.innerHTML = "<h1>Hello World<h1>";

document.addEventListener('DOMContentLoaded', (e) => {
    getValues();
})

function getValues() {
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        console.log(data);
        counter = data.counter;
        updater();
    })
}

btn.onclick = (e) => {
    console.log(e.target);
}
btn1.onclick = (e) => {
    console.log(e.target);
}

btn.onclick = adder;
btn1.onclick = resetCounter;


function adder(e) {
    console.log(e.target);
    counter++;
    updater();
}

function resetCounter() {
    getValues();
}

function updater() {
    output.innerHTML = `<h2>Counter : ${counter}<h2>`;
}