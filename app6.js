const json = {
    "friends" : [
        {
            "first" : "John",
            "last" : "Smith",
            "id" : 1
        },
        {
            "first" : "Mike",
            "last" : "Jones",
            "id" : 2
        },
        {
            "first" : "Larry",
            "last" : "Brown",
            "id" : 3
        }
    ]
}

console.log(json);
output();
function output() {
    json.friends.forEach(person => {
        const temp = `${person.first} ${person.last} ${person.id}`;
        console.log(temp);
    })
}