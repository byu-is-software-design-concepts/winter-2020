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
let trainers = [];
pokemon.forEach(element => {
  trainers.push(element.trainer)
});
// TODO: Create an array of all the pokemon names using .map()
let pokemonName = pokemon.map(pk => {
  return pk.name;
})

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
let scarer = [];
monsters.forEach(element => {
  if(element.position === "Scarer"){
    scarer.push(element);
  }
});


// TODO: Create an array containing only non-Scarers using .filter()

let nonScarer = monsters.filter(monster => monster.position !== "Scarer");

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()

function Sum(numbersList){
  x = 0;
  numbersList.forEach(element => {
    x += element;
  });
  return x;
}

let sum = Sum(numbers);

// TODO: Sum the numbers in the following array using .reduce()

numbers.reduce((first, next) => first + next)

