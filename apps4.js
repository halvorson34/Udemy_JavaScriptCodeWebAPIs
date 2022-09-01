const obj1 = {
    "first" : "John",
    "last" : "Smith",
    "id" : 100
}

console.log(Object.entries(obj1));
for(const [key, value] of Object.entries(obj1)) {
    console.log(key);
    console.log(obj1[key]);
    
}

const arr1 = (Object.keys(obj1));
const arr2 = (Object.values(obj1));
const arr3 = ["John", "Smith", 100, true, "hello world"];

console.log(arr1);
console.log(arr2);
console.log(arr3);

for(let i=0; i<arr3.length; i++) {
    console.log(arr3[i]);
}

for (i in arr3) {
    console.log("index", i, "value", arr3[i]);
}

arr3.forEach((item, index, array) => {
    console.log(item, index);
    console.log(array);
})

Object.values(obj1).forEach((val) => {
    console.log(val);
})

Object.entries(obj1).forEach((pair) => {
    console.log(pair);
})

obj1.arr = arr3;
console.log(obj1);

obj1.arr.forEach(el => console.log(el));

const friends = [
    {
        "first" : "John",
        "last" : "Smith"
    },
    {
        "first" : "Larry",
        "last" : "Brown"
    }
]

console.log(friends);

friends.forEach(friend => {
    console.log(friend.first, friend.last);
})