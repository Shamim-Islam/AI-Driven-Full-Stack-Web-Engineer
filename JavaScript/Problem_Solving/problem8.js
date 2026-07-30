// Problem 8: Count Words in a Sentence

let str = 'i love bangladesh and';

let strSplitArr = str.split(' ').length;
// console.log(strSplitArr)

// with function

function wordCount(str) {
    let strSplitArr = str.split(' ').length;
    return strSplitArr
}

console.log(wordCount(str))