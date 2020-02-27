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
const trainers = [];
for (pair of partners) {
  trainers.push(pair.trainer);
}

// TODO: Create an array of all the pokemon names using .map()
const pokemon = partners.map(pair => pair.pokemon);

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
for (monster of monsters) {
  if (monster.position === "Scarer") {
    scarers.push(monster);
  }
}
console.log(scarers);
// TODO: Create an array containing only non-Scarers using .filter()
const nonScarers = monsters.filter(monster => monster.position !== "Scarer");
// OR
const nonScarers2 = monsters.filter(monster => !scarers.includes(monster));


// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let sum = 0;
numbers.forEach(number => (sum += number));

// TODO: Sum the numbers in the following array using .reduce()
const sumReduce = numbers.reduce((acc, val) => acc + val);

