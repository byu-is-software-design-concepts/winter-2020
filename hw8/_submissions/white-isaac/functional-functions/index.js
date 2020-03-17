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
let trainerNames = [];
pokemon.forEach((pair) => {
  trainerNames.push(pair.trainer);
});
console.log(trainerNames);
// TODO: Create an array of all the pokemon names using .map()
let trainerNames2 = pokemon.map(pair => pair.trainer);
console.log(trainerNames2)

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
monsters.forEach(monster => {
  if (monster.position === "Scarer") {
    scarers.push(monster);
  }
});
console.log(scarers);
// TODO: Create an array containing only non-Scarers using .filter()
let scarers2 = monsters.filter(monster => monster.position === "Scarer");
console.log(scarers2);

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let numSum = 0;
numbers.forEach(num => numSum += num);
console.log(numSum);
// TODO: Sum the numbers in the following array using .reduce()
let numSum2 = numbers.reduce((curSum, curr) => curSum + curr);
console.log(numSum2);