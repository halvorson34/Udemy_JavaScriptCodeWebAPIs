const url = 'EicsB0bKzfKGMX9P66d6BLPCHIWsrF3BX8imIQrco8dubJnhafZJ2aKZBfv3ffNNkHtx6U6uRx36kD5J0TnykLxiPAWyr9Cem5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBiOO2v11';
const btn = document.querySelector('.btn');
btn.textContent = 'Get Sheet Data';
btn.onclick = () => {
    fetch(url)
    .then(rep => rep.json())
    .then(data => {
        console.log(data);
    })
}