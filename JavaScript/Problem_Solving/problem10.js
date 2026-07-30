// Problem 10: Find the Smallest Number in an Array

let arr = [5, 500, 120, 50, 1020, 6429, 123, 1, 0, 6430, 9454];

function smallestNumChecker(arr) {
    let smallest = arr[0];
    for(let i = 0; i < arr.length ; i++) {
        let currentElement = arr[i];
        if(currentElement < smallest) {
            smallest = currentElement;
        }
    }
    return smallest
}

console.log(smallestNumChecker(arr))