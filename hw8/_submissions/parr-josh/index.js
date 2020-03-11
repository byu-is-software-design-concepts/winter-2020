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
// TODO: Create an array of all the pokemon trainer's names without using .map()
const trainerNames = [];
for (name of pokemon) {
  trainerNames.push(name.trainer);
}
console.log(trainerNames);

// TODO: Create an array of all the pokemon names using .map()
const pokemonNames = pokemon.map(poke => poke.name);
// const pokemonNames = pokemon.map(function(item, index, array){
//   return item.name
// })
console.log(pokemonNames);

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
// TODO: Create an array containing only Scarers without using .filter()
const scarers = [];
for (name of monsters) {
  if (name.position === "Scarer") {
    scarers.push(name);
  }
}
console.log(scarers);
// TODO: Create an array containing only non-Scarers using .filter()
let nonScarer = [];
let scarers1 = [];
nonScarer = monsters.filter(record => record.position !== "Scarer");
scarers1 = monsters.filter(record => record.position === "Scarer");

console.log(nonScarer);
console.log(scarers1);

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let sum = 0;
for (i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);
// TODO: Sum the numbers in the following array using .reduce()
const sumReduce = numbers.reduce((sum, currentVal) => sum + currentVal, 0);
console.log(sumReduce);
