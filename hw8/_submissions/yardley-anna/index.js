// .map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const partners = [
  { pokemon: "Onix", trainer: "Brock" },
  { pokemon: "Pikachu", trainer: "Ash Ketchum" },
  { pokemon: "Staryu", trainer: "Misty" },
  { pokemon: "Torchic", trainer: "May" },
  { pokemon: "Victreebel", trainer: "James" },
  { pokemon: "Wobbuffet", trainer: "Jessie" }
];
// TODO: Create an array of all the pokemon trainer's names without using .map()
let pokemonNames = [];
for (const { name } of pokemon) {
	pokemonNames.push(name);
}
console.log(pokemonNames);

// TODO: Create an array of all the pokemon names using .map()
let pokemonNamesMapped = pokemon.map(poke => poke.name);
console.log(pokemonNamesMapped);
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
let scarers = [];
for (const monster of monsters) {
	monster.position === "Scarer" && scarers.push(monster);
}

console.log(scarers);

// TODO: Create an array containing only non-Scarers using .filter()
const scarersFiltered = monsters.filter(
	({ position }) => position === "Scarer"
);
console.log(scarersFiltered);

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let sum = 0;
for (const num of numbers) {
	sum += num;
}
// TODO: Sum the numbers in the following array using .reduce()
const sumReduced = numbers.reduce((l, r) => l + r);
console.log(sumReduced);