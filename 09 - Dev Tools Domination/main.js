const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");
// Interpolated
console.log("I am an %s string", "interpolated");
// Styled
console.log("%cHere is some great text", "background-color:blue");
// warning!
console.warn("here's a warning");
// Error :|
console.error("display an error");
// Info
console.info("this is an info");
// Testing
console.assert(1 === 1, "This is a wrong answer");
console.assert(1 === 2, "This is a wrong answer");
// clearing
// console.clear()

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("Chris");
console.count("Chris");
console.count("Chris");
console.count("Chris");
console.count("Chris");
console.count("Chris");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/cbongard90")
  .then((response) => response.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.table(data);
  });
