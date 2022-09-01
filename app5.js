const arr1 = [
    {"first" : "John"},
    {"first" : "Mike"},
    {"first" : "Jane"},
    {"first" : "Lisa"},
    {"first" : "Henry"},
];

console.log(arr1);
const str1 = JSON.stringify(arr1);
console.log(str1);
const jsObj1 = JSON.parse(str1);
console.log(jsObj1);

arr1[5] = {"first" : "Joe"};
console.log(arr1);
console.log(jsObj1);