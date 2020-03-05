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
// Create an array of all the pokemon trainer's names without using .map()
const trainers = [];
for (let i = 0; i < pokemon.length; i++) {
  const monster = pokemon[i];
  trainers.push(monster.trainer);
}
// Create an array of all the pokemon names using .map()
const trainers2 = pokemon.map(monster => {
  return monster.trainer;
});

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
// Create an array containing only Scarers without using .filter()
const scarers = [];
for (let i = 0; i < monsters.length; i++) {
  const monster = monsters[i];
  if (monster.position === 'Scarer') {
    scarers.push(monster);
  }
}
// Create an array containing only non-Scarers using .filter()
const scarers2 = monsters.filter(monster => {
  return monster.position === 'Scarer';
});

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// Sum the numbers in the following array without using .reduce()
let currentValue = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  currentValue += number;
}
// Sum the numbers in the following array using .reduce()
const sum = numbers.reduce((runningTotal, currentNumber) => {
  return runningTotal + currentNumber;
});
