/**
 *  1. variables (data types)
 *  2. array
 *  3. function
 *  4. object
 *  5. some more basics types
 *
 *
 *
 *
 *
 * **/

const destination: string = "saint martin";
const helicopters: number = 33;
const isAvailable: boolean = false;

const countries: string[] = ["nepal", "bhutan", "pakistan", "afganistan"];

function buyBook(title: string, price: number, discount?: number) {
  if (discount === undefined) {
    discount = 0;
  }
  return `The book name is ${title} and the cost is ${price - discount}`;
}

// console.log(buyBook('emmy', 500, 10));

const tubelight: {
  brand: string;
  color: string;
  price: number;
  isAvailable: boolean;
} = {
  brand: "philips",
  color: "white",
  price: 500,
  isAvailable: true,
};
