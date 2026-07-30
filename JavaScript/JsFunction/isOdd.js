function isOdd(number) {
    if(number %2 === 1) {
        return true;
    } else {
        return false;
    }
}

const result = isOdd(1);
console.log('is Odd ?', result)