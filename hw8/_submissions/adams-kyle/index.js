// .map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const pokemon = [
  { name: "Onix", trainer: "Brock" },
  { name: "Pikachu", trainer: "Ash Ketchum" },
  { name: "Staryu", trainer: "Misty" },
  { name: "Torchic", trainer: "May" },
  { name: "Victreebel", trainer: "James" },
  { name: "Wobbuffet", trainer: "Jessie" }
];

// array of trainers without .map()
let trainerName = [];
pokemon.forEach(element => {
  trainerName.push(element.trainer)
});

console.log(trainers);

// array of pokemon names with .map()
let pokemonName = pokemon.map(element => {
  console.log(element.name);
  return element.name;
}

// .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const monsters = [
  { name: "Celia", position: "Receptionist" },
  { name: "Fungus", position: "Scaring Assistant" },
  { name: "Henry J. Waternooose III", position: "CEO" },
  { name: "James P. Sullivan", position: "Scarer" },
  { name: "Mike Wazowski", position: "Scaring Assistant" },
  { name: "Randall Boggs", position: "Scarer" },
  { name: "Roz", position: "Undercover Agent" }
];

// array containing only Scarers without using .filter()
ScarerName = [];
monsters.forEach(element => {
  if (scarer.position === "Scarer") {
    ScarerName.push(element)
}});

console.log(ScarerName);


// array containing only non-Scarers using .filter()
const nonScarerName = monsters.filter(element => element.position !== 'Scarer')

console.log(nonScarerName);


// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];

// Sum the numbers in the following array without using .reduce()
let sumNum;
for (let i = 0; i < numbers.length; i++) {
  sumNum += numbers[i];
}

console.log(sumNum);


// Sum the numbers in the following array using .reduce()
let sumNumbers;
sumNumbers = numbers.reduce((prev, actual) => (prev + actual)());

console.log(sumNumbers);


