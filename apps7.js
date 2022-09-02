// const val = output();
// console.log(val);

// output().then((rep) => {
//     console.log(rep);
// })

// output()
//     .then(rep => viewData(rep))
//     .catch(e => console.log(e));
const url = 'json6.json';

function output2() {
    fetch(url)
        .then(rep => rep.json())
        .then(data => viewData(data))
        .catch(error => console.log(error));
}


 async function output() {
    const url = 'json6.json';
    const req = new Request(url);
    const rep = await fetch(req);
    const json = await rep.json();
    viewData(json);
    // return await Promise.resolve("Hello World");
}

function viewData(val) {
    console.log(val);
}