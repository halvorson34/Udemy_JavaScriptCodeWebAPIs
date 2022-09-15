const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const output = document.querySelector(".output");

const url = 'https://www.reddit.com/r/funny/top/.json?limit=5';

btn.onclick = () => {
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        getData(data.data.children);
    })
}

function getData(data) {
    console.log(data);
    let html = '';
    data.forEach((item) => {
        console.log(item.data);
        const el = item.data;
        html += `<div><h3>${el.title}</h3>`;
        html += `<img src = '${el.thumbnail}'>`;
        html += `<br>`;
        html += `<a href = '${el.url}' target = "_blank">${el.url}</a></div>`;
    });
    output.innerHTML = html;
}