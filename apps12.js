const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');
const btn2 = document.createElement('button');
const myInput = document.querySelector('input');
const output = document.querySelector('.output');
const baseURL = 'https://api.stackexchange.com/';
const pathURL = '2.3/questions?order=desc&sort=activity&site=stackoverflow';

btn.onclick = () => {
    const url = baseURL + pathURL;
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        outputData(data.items);
    })
}

function outputData(data) {
    data.forEach(el => {
        console.log(el);
        const main = document.createElement('div');
        main.style.border = '1px solid #ddd';
        output.append(main);
        const div1 = document.createElement('div');
        div1.textContent = el.title;
        main.append(div1);

        const div2 = document.createElement('div');
        main.append(div2);
        el.tags.forEach((tag) => {
            const span = document.createElement('span');
            span.textContent = tag;
            main.append(span);
        })

        const div3 = document.createElement('div');
        main.append(div3);
        div3.innerHTML = `<a href="${el.link}" target="_blank">${el.link}</a>`;
    });
}