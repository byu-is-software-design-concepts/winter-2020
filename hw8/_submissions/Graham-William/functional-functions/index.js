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

let trainerArray = []
for(c of pokemon) {
  trainerArray.push(c.trainer)
}
console.log(trainerArray)


// TODO: Create an array of all the pokemon names using .map()

let namesArray = pokemon.map(p => {return p.name})
console.log(namesArray) 

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
let scarerArray = []
for(c of monsters) {
  if(c.position == 'Scarer') {
    scarerArray.push(c)
  }
}
// TODO: Create an array containing only non-Scarers using .filter()

let scarerArray2 = monsters.filter(c => c.position != 'Scarer') //I'm assuming that assistant scarers aren't actual scarers

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let sum = 0
for(n of numbers) {
  sum = sum + n
}
// TODO: Sum the numbers in the following array using .reduce()

let total = numbers.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)
