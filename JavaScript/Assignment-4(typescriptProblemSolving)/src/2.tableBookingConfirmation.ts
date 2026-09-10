interface Booking {
  name: string;
  guests: number;
  time: string;
}

const formatBookingConfirmation = (booking: Booking): string => {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}. `;
};

const booking = { name: "Aisha", guests: 4, time: "7:00 PM" };
const booking2 = { name: "Rahim", guests: 2, time: "8:30 PM" };

console.log(formatBookingConfirmation(booking2));
