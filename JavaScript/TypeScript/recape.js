"use strict";
/**
 *  1. variables (data types)
 *  2. array
 *  3. function
 *  4. object
 *  5. some more basics types
 *
 * */



const destination = "saint martin";
const helicopters = 33;
const isAvailable = false;
const countries = ["nepal", "bhutan", "pakistan", "afganistan"];
function buyBook(title, price, discount) {
    if (discount === undefined) {
        discount = 0;
    }
    return `The book name is ${title} and the cost is ${price - discount}`;
}
// console.log(buyBook('emmy', 500, 10));
const tubelight = {
    brand: "philips",
    color: "white",
    price: 500,
    isAvailable: true,
};
