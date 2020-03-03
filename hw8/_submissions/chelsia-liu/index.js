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
for (trainer of pokemon) {
  trainers.push(trainer.trainer);
}
console.log("TRAINERS");
console.log(trainers);

// Create an array of all the pokemon names using .map()
const pokemonNames = pokemon.map(x => x.name);
console.log("POKEMON");
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

// Create an array containing only Scarers without using .filter()
const scarers = [];
for (monster of monsters){
  if(monster.position === "Scarer"){
    scarers.push(monster);
  }
}
console.log("SCARERS");
console.log(scarers);

// Create an array containing only non-Scarers using .filter()
const nonScarers = monsters.filter(monster => monster.position !== "Scarer");
console.log("NON-SCARERS");
console.log(nonScarers);

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];

// Sum the numbers in the following array without using .reduce()
var sum = 0;
for(var i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
console.log("SUM OF NUMBERS IS " + sum);

// Sum the numbers in the following array using .reduce()
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log("SUM OF NUMBERS (REDUCE) IS " + numbers.reduce(reducer));