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
trainers = []
for (let i = 0; i < pokemon.length; i++) {
  // console.log(pokemon[i].trainer)
  trainers.push(pokemon[i].trainer)
}

// TODO: Create an array of all the pokemon names using .map()
pokemonNames = pokemon.map(x => {return x.name})
console.log(pokemonNames)


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
newArray = []
for (let i = 0; i < monsters.length; i++) {
  if (monsters[i].position == "Scarer"){
  newArray.push(monsters[i])
  console.log(monsters[i])
  }
}
// TODO: Create an array containing only non-Scarers using .filter()
const result = monsters.filter(x => x.position == 'Scarer')

console.log(result)

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let total = 0
for (let i = 0; i < numbers.length; i++){
  total = total + numbers[i]
}
console.log(total)

// TODO: Sum the numbers in the following array using .reduce()

const reducer = (accumulator, currentValue) => accumulator + currentValue
const newTotal = numbers.reduce(reducer)
console.log(newTotal)
