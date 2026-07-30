// Problem 12: Filter Numbers Greater Than a Value

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let value = 90;
let filterdArray = [];

for(const num of arr) {
    if(num > value) {
        filterdArray.push(num)
    }
}
console.log(filterdArray)