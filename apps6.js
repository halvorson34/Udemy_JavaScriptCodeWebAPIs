// const json = {
//     "friends" : [
//         {
//             "first" : "John",
//             "last" : "Smith",
//             "id" : 1
//         },
//         {
//             "first" : "Mike",
//             "last" : "Jones",
//             "id" : 2
//         },
//         {
//             "first" : "Larry",
//             "last" : "Brown",
//             "id" : 3
//         }
//     ]
// }

// console.log(json);
// output();
getData();
function getData() {
    const url = "json6.json";
    fetch(url)
        .then((rep) => rep.text())
        .then((data) => {
            console.log(data);
            const jsObj = JSON.parse(data);
            console.log(jsObj);
            output(jsObj);
        })
}

getKnownJsonData();
function getKnownJsonData() {
    const url = 'json6.json';
    fetch(url)
        .then((rep) => rep.json())
        .then((data) => {
            console.log(data);
            output(data);
        })
}



function output(json) {
    json.friends.forEach(person => {
        const temp = `${person.first} ${person.last} ${person.id}`;
        console.log(temp);
    })
}