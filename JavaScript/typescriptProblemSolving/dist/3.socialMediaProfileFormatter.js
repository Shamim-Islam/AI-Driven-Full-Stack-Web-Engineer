"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatUserProfile = (user) => {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
};
console.log(formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka",
}));
//# sourceMappingURL=3.socialMediaProfileFormatter.js.map