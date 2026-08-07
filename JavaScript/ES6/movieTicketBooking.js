// movie ticket booking

let bookTicket = (movie, seats = 1, pricePerSeat = 300) => {
  // check validation
  if (
    typeof movie !== "string" ||
    typeof seats !== "number" ||
    typeof pricePerSeat !== "number" ||
    seats < 0 ||
    pricePerSeat < 0
  ) {
    return "Invalid";
  }

  let total = seats * pricePerSeat;
  return `${movie}: ${seats} seat(s), Total ৳${total}`;
};

console.log(bookTicket("titanic", 2, 500));
console.log(bookTicket("Dune"));
console.log(bookTicket("Dune", 3));
console.log(bookTicket("Dune", 2, 450));
console.log(bookTicket(123, 2));
