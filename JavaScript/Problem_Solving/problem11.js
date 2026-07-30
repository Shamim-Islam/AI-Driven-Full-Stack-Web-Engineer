// Problem 11: Sum and Average of an Array

let arr = [2,3,10,55,42,6,41,75,4,5]
// let sum = 0;

// for(let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//     // console.log(arr[i], sum)
// }
// let avg = sum / arr.length;
// console.log(avg)

// with function

function generateAvg(arr) {
    let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
    let avg = sum / arr.length;
    return avg;
}

console.log(generateAvg([5,10,15]))