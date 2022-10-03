const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=EicsB0bKzfKGMX9P66d6BLPCHIWsrF3BX8imIQrco8dubJnhafZJ2aKZBfv3ffNNkHtx6U6uRx36kD5J0TnykLxiPAWyr9Cem5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBiOO2v11-_bhUF3cYsulTP2c3V_cH6bmJYtbUlTwH4gK9h99BdXAvEiYjBOyPYT8i41cd06RsOPw8z6EkkLPJ4tIisClPcZiQ&lib=MBqh__ZUWPOTSjV6_z1HRPbR3ACycPSBA';
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
btn.textContent = 'Get Sheet Data';
btn.onclick = () => {
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        console.log(data);
        const headings = data[0];
        const rows = data.slice(1);
        outputData(headings, rows);
    })
}

function outputData(headings, rows) {
    output.innerHTML = '';
    const tabl = maker('table', output, 'table');
    const heading = maker('tr', tabl, 'row');
    headings.forEach(ele => {
        const el = maker('th', heading, 'th');
        el.textContent = ele;
    });
    rows.forEach(row => {
        const r = maker('tr', tabl, 'row');
        row.forEach(col => {
            const el = maker('td', r, 'td');
            el.textContent = col;
        })
    })
}

function maker(t, parent, c) {
    const el = document.createElement(t);
    el.classList.add(c);
    return parent.appendChild(el);
}