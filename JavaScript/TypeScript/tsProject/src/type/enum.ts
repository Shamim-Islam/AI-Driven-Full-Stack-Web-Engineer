enum  Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let offDay = Day.Friday
console.log(offDay);

enum Roles {
    Admin = 'Admin',
    Moderator = 'Moderator',
    Guest = 'Guest'
}
console.log(Roles.Admin);

const nandu = {
    name: 'chandu',
    role: Roles.Guest
}

console.log(nandu);