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
const trainers_nomap = [];
pokemon.forEach(t => trainers_nomap.push(t.trainer) )

// TODO: Create an array of all the pokemon names using .map()
const trainers = pokemon.map(t => {return t.trainer})

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
const scarers_nofilter = [];
monsters.forEach(m => {if (m.position.toLowerCase().includes('scarer')) {scarers_nofilter.push(m)} })

// TODO: Create an array containing only non-Scarers using .filter()
const scarers = monsters.filter(m => m.position.toLowerCase().includes('scarer'))

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
const sumArray = arr => {return sumRec(arr)}

const sumRec = arr => {
  return arr.length > 1 ? arr[0] + sumRec(arr.slice(1)) : arr[0];
}

// TODO: Sum the numbers in the following array using .reduce()
const reducer = (acc, cur) => acc + cur;
const reduced = numbers.reduce(reducer);