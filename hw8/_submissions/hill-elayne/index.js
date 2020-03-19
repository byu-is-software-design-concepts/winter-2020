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
// array of all the pokemon trainer's names without using .map()
let trainers = [];
for (let i = 0; i < pokemon.length; i++) {
  trainers.push(pokemon[i].trainer);
}
// array of all the pokemon names using .map()
let names = pokemon.map(x => {return x.name});
// console.log(trainers);
// console.log(names);


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
let scarers = [];
for (let i = 0; i < monsters.length; i++) {
  if (monsters[i].position == "Scarer") {
    scarers.push(monsters[i]);
  }
}
// array containing only non-Scarers using .filter()
let nonScarers = monsters.filter(x => x.position != "Scarer");
// console.log(nonScarers);
// console.log(scarers);


// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// Sum the numbers in the following array without using .reduce()
let loopSum = 0;
for (let i = 0; i < numbers.length; i++) {
  loopSum += numbers[i];
}
// Sum the numbers in the following array using .reduce()
let funSum = numbers.reduce((a,b) => a + b, 0);
// console.log(loopSum);
// console.log(funSum);
