/*
  Problem: Assignment Life (Closures)
  
  Real-life scenario: On Programming Hero, every student gets 3 LIVES. Each time you submit an assignment LATE for 60 marks, you lose 1 life.
  When lives hit 0, you can't submit late assignment for 60 marks. You
  want ONE function that can create a fresh, independent life-counter.

  createLifeCounter() — returns a function. Every time you call that
  returned function (on a late submission), it decreases a PRIVATE
  lives count by 1 and returns the remaining lives. There is NO global
  variable storing lives — it lives only inside the closure.

  Input:
    const rahimLives = createLifeCounter();
    rahimLives(); // late submission
    rahimLives(); // late submission

  Output:
    2
    1

*/

let createLifeCounter = () => {
  let lives = 3;

  return () => {
    if (lives > 0) {
      lives--;
    }
    return lives;
  };
};

const rahimLifeUpate = createLifeCounter();
const karimLifeUpate = createLifeCounter();
const jilluLifeUpate = createLifeCounter();
const nahinLifeUpate = createLifeCounter();
const tahimLifeUpate = createLifeCounter();

console.log("rahimLife--> ", rahimLifeUpate());
console.log("rahimLife--> ", rahimLifeUpate());
console.log("rahimLife--> ", rahimLifeUpate());
console.log("karimLife--> ", karimLifeUpate());
console.log("jilluLife--> ", jilluLifeUpate());
console.log("jilluLife--> ", jilluLifeUpate());
console.log("nahinLife--> ", nahinLifeUpate());
console.log("tahimLife--> ", tahimLifeUpate());
console.log("tahimLife--> ", tahimLifeUpate());
