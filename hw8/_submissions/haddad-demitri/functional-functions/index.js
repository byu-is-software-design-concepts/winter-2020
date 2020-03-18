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
const trainers = [];
for (var i=0; i < pokemon.length; i++){
  trainers.push(pokemon[i].trainer);
}
console.log(trainers)

// TODO: Create an array of all the pokemon names using .map()
const trainersMap = pokemon.map(x  => x.trainer);
console.log(trainersMap)

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
for (var i=0; i < monsters.length; i++){
  if(monsters[i].position === "Scarer"){
    scarers.push(monsters[i]);
  }
}
console.log(scarers)

// TODO: Create an array containing only non-Scarers using .filter()
const scarersFilter = monsters.filter(x => x.position === 'Scarer');
console.log(scarersFilter)



// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
var sum = 0;
for (var i=0; i < numbers.length; i++){
  sum += numbers[i];
}
console.log(sum)

// TODO: Sum the numbers in the following array using .reduce()
const reducer = (accumulator, currentValue) => accumulator + currentValue;
var sumReduce = (numbers.reduce(reducer));
console.log(sumReduce)