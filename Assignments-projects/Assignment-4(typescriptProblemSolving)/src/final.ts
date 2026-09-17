//Problem-01: Battery Level Status

const getBatteryStatus = (percentage: number): string => {
  if (percentage <= 20) {
    return "Low";
  } else if (percentage <= 50) {
    return "Medium";
  } else if (percentage <= 90) {
    return "High";
  }
  return "Full";
};

//Problem-02: Table Booking Confirmation
interface Booking {
  name: string;
  guests: number;
  time: string;
}

const formatBookingConfirmation = (booking: Booking): string => {
  return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};

//Problem-03: Weekly Expense Tracker
const calculateWeeklyTotal = (expenses: number[]): number => {
  const total = expenses.reduce((acc, item) => acc + item, 0);
  return total;
};

//Problem-04: Traffic Light Action
type Light = "red" | "yellow" | "green";

const getTrafficAction = (light: Light): string => {
  if (light === "red") {
    return "Stop";
  } else if (light === "yellow") {
    return "Slow Down";
  } else {
    return "Go";
  }
};

//Problem-05: Quiz Score Summary
interface Result {
  total: number;
  average: number;
}

const getQuizSummary = (scores: number[]): Result => {
  const total = scores.reduce((acc, item) => acc + item, 0);
  if (scores.length === 0) {
    return {
      total: 0,
      average: 0,
    };
  }
  const average = total / scores.length;
  return {
    total,
    average,
  };
};
