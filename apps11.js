const btn = document.querySelector(".btn");
btn.textContent = 'Get Zen Quote';
const btn1 = document.querySelector(".btn1");
btn1.textContent = 'Get Endpoints';
const btn2 = document.createElement('button');
btn2.textContent = 'Load Search Results';
document.body.prepend(btn2);
const btn3 = document.createElement('button');
btn3.textContent = 'Clear';
document.body.append(btn3);
const myInput = document.querySelector('input');
const output = document.querySelector(".output");

const url = 'https://api.github.com/zen';
const url1 = 'https://api.github.com/';
const url2 = 'https://api.github.com/search/repositories?q=javascript';

btn.onclick = () => {
    fetch(url)
    .then(res => res.text())
    .then(zen => {
        console.log(zen);
        output.innerHTML = `<h1>${zen}</h1>`;
    })
}

btn1.onclick = () => {
    fetch(url1)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let html = '<ul>';
        for (const [key, value] of Object.entries(data)) {
            console.log(key, value);
            html += `<li>${key} <a href='${value}' target='_blank'>${value}</a></li>`;
        }
        html += `</ul>`;
        output.innerHTML = html;
    })
}

btn2.onclick = () => {
    const val = myInput.value;
    const mainUrl = `${url2}&per_page=${val}`;
    fetch(mainUrl)
    .then(res => res.json())
    .then(data => {
        output.innerHTML = `<div>Search for ${val} results total: ${data.total_count}</div>`;
        outputItems(data.items);
    })
}

btn3.onclick = () => {
    clear();
}

function clear() {
    output.innerHTML = '';
}

function outputItems(data) {
    let html = '';
    data.forEach(el => {
        html += '<div style="border:1px solid #ddd">';
        html += `<div>Name: ${el.name}</div>`;
        html += `<div>URL: ${el.url}</div>`;
        html += `<div>Description: ${el.description}</div>`;
        html += `<div>Topics: `;
        el.topics.forEach(topic => {
            html += `<span>${topic}</span> | `;
        })

        html += `</div></div>`;
    })
    output.innerHTML += html;
}