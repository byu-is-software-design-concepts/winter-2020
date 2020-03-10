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
var trainers = []
for (let index = 0; index < pokemon.length; index++) {
  trainers.push(pokemon[index].trainer)
}
console.log(trainers)
// TODO: Create an array of all the pokemon names using .map()
var maptrainers = pokemon.map(x => x.name)
console.log(maptrainers)

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
var scarers = []
for (let index = 0; index < monsters.length; index++) {
  if (monsters[index].position==='Scarer') {
    scarers.push(monsters[index].name)
  }
}
console.log(scarers)

// TODO: Create an array containing only non-Scarers using .filter()

var filterscarers = monsters.filter(monsters => monsters.position!='Scarer').map(x => x.name)
console.log(filterscarers)

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
var num=0;
for (let index = 0; index < numbers.length; index++) {
  num+=numbers[index]
}
console.log(num)
// TODO: Sum the numbers in the following array using .reduce()
var reducenum = numbers.reduce((total, num)=> num+total,0)
console.log(reducenum)