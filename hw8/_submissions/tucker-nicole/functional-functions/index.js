// .map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const pokemon = [{
    name: "Onix",
    trainer: "Brock"
  },
  {
    name: "Pikachu",
    trainer: "Ash Ketchum"
  },
  {
    name: "Staryu",
    trainer: "Misty"
  },
  {
    name: "Torchic",
    trainer: "May"
  },
  {
    name: "Victreebel",
    trainer: "James"
  },
  {
    name: "Wobbuffet",
    trainer: "Jessie"
  }
];

// TODO: Create an array of all the pokemon trainer's names without using .map()
let trainers = [];
pokemon.forEach(function (item) {
  trainers.push(item.trainer);
})
console.log("trainers: ", trainers);

// TODO: Create an array of all the pokemon names using .map()
let trainers2 = pokemon.map(t => t.trainer);
console.log("trainers mapped: ", trainers2);

// .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const monsters = [{
    name: "Celia",
    position: "Receptionist"
  },
  {
    name: "Fungus",
    position: "Scaring Assistant"
  },
  {
    name: "Henry J. Waternooose III",
    position: "CEO"
  },
  {
    name: "James P. Sullivan",
    position: "Scarer"
  },
  {
    name: "Mike Wazowski",
    position: "Scaring Assistant"
  },
  {
    name: "Randall Boggs",
    position: "Scarer"
  },
  {
    name: "Roz",
    position: "Undercover Agent"
  }
];

// TODO: Create an array containing only Scarers without using .filter()
let scarers = [];
monsters.forEach(function (item) {
  if (item.position === "Scarer") {
    scarers.push(item);
  }
})
console.log("scarers: ", scarers);

// TODO: Create an array containing only non-Scarers using .filter()
let scarers2 = monsters.filter(m => m.position === "Scarer");
console.log("scarers filter: ", scarers2);

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let sum = 0;
numbers.forEach(function (item) {
  sum += item;
})
console.log("sum: ", sum);

// TODO: Sum the numbers in the following array using .reduce()
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let sum2 = numbers.reduce(reducer);
console.log("sum reducer: ", sum2);