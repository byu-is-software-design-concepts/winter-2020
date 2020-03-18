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
let arr1 = []
for (let i = 0; i < pokemon.length; i++) {
  arr1.push(pokemon[i].name)
}
console.log(arr1)
// TODO: Create an array of all the pokemon names using .map()
let arr2 = pokemon.map(x => x.name)
console.log(arr2)

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
let arr3 = []
for (let i = 0; i < monsters.length; i++) {
  if (monsters[i].position === 'Scarer') {
    arr3.push(monsters[i])
  }
}
console.log(arr3)
// TODO: Create an array containing only non-Scarers using .filter()
let arr4 = monsters.filter(x => x.position === 'Scarer')
console.log(arr4)

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let total1 = 0
for (let i = 0; i < numbers.length; i++) {
  total1 = total1 + numbers[i]
}
console.log(total1)
// TODO: Sum the numbers in the following array using .reduce()
//let total2 = 0
let total2 = numbers.reduce((x, y) => x + y)
console.log(total2)
