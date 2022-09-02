const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const url = 'json6.json';

btn.onclick = () => {
    getData();
}

function getData() {
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        console.log(data);
    })
}