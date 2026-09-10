"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatBookingConfirmation = (booking) => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}. `;
};
const booking = { name: "Aisha", guests: 4, time: "7:00 PM" };
const booking2 = { name: "Rahim", guests: 2, time: "8:30 PM" };
console.log(formatBookingConfirmation(booking2));
//# sourceMappingURL=2.tableBookingConfirmation.js.map