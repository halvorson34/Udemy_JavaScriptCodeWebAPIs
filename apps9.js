const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const output = document.querySelector('.output');
const url = 'json6.json';

btn.onclick = () => {
    output.innerHTML = "Connecting.....";
    getData();
}

btn1.onclick = () => {
    clearData();
}

function getData() {
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        outData(data.friends);
    })
}

function outData(val) {
    console.log(val);
    let html = "";
    val.forEach((element, i) => {
        console.log(element);
        html += `<div>${i+1}. ${element.first} ${element.last} ${element.id}</div>`;
    });
    output.innerHTML = html;
}

function clearData() {
    let html = "Cleared";
    output.innerHTML = html;
}