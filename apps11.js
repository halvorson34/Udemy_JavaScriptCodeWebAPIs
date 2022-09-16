const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const output = document.querySelector(".output");
const url = 'https://api.github.com/zen';

btn.onclick = () => {
    fetch(url)
    .then(res => res.text())
    .then(zen => {
        console.log(zen);
        output.innerHTML = `<h1>${zen}</h1>`;
    })
}