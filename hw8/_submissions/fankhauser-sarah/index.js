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
const trainers = []
for (pair of pokemon) {
  trainers.push(pair.trainer)
}

// TODO: Create an array of all the pokemon names using .map()
const pokemons = pokemon.map(pair => pair.pokemon)


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
const scarers = []
for (pair of monsters) {
  if (pair.position === 'Scarer') {
    scarers.push(pair.name)
  }
}

// TODO: Create an array containing only non-Scarers using .filter()
const nonScarers = monsters.filter(pair => pair.position !== 'Scarer')

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let sum = 0
for (num of numbers) {
  sum += num
}

// TODO: Sum the numbers in the following array using .reduce()
let sum = numbers.reduce((acc, val) => acc + val)