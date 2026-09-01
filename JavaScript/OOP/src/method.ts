class Student {
  name: string;
  age: number;
  email: string;
  marks: number;

  constructor(name: string, age: number, email: string, marks: number) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.marks = marks;
  }

  getinfo(): string {
    return `Name: ${this.name}\nEmail: ${this.email}`;
  }
}

// instantiate
const rafi = new Student("rafi", 22, "rafi@gmail.com", 100);
const sadia = new Student("sadia", 22, "sadia@gmail.com", 90);

console.log(rafi.getinfo());
