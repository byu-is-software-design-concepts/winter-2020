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

let trainerArray = [];
pokemon.forEach(trainer => {trainerArray.push(trainer.trainer)});
console.log(trainerArray)

let trainerArray2 = pokemon.map(x => x.trainer)
console.log(trainerArray2)

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

Scarers = []
monsters.forEach(scarer => {if(scarer.position === "Scarer") {Scarers.push(scarer)}});
console.log(Scarers)

const Scarer2 = monsters.filter(scarer => scarer.position === 'Scarer')
console.log(Scarer2)


// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];

let val = 0
numbers.forEach(number => {val +=number});
console.log(val)

let val2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(val2)
