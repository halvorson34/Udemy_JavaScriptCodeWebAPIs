const obj1 = {
    "first" : "John",
    "id" : 100,
    "courses" : ["html", "css", "js", [1,2,3]]
};

console.log(obj1);
console.log(obj1.courses);
console.log(obj1.courses[0]);
console.log(obj1.courses[1]);
console.log(obj1.courses[2]);
obj1.courses[0] = "api";
console.log(obj1.courses);
console.log(obj1.courses[3][0]);
console.clear();

const arr1 = ["one", "two", "three"];
console.log(arr1);

obj1.courses[4] = arr1;
console.log(obj1);
