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
function nameListNoMap() {
  let names = []
  for (let i = 0; i < pokemon.length; i++) 
    names.push(pokemon[i]['name'])
  return names
}
// TODO: Create an array of all the pokemon names using .map()
function nameListWithMap() {
  let names = []
  pokemon.map(function(value) {names.push(value.name)})
  return names
}

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
function nameListNoFilter() {
  let result = []
  for(let i = 0; i < monsters.length; i++) {
    if(monsters[i].position === "Scarer") 
      result.push(monsters[i])
  }
  return result
}
// TODO: Create an array containing only non-Scarers using .filter()
function nameListWithFilter() {
  let result = (monsters.filter(function(value) {return value.position == "Scarer"}))
  return result
}

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
function numberListNoReduce() {
  let result = 0
  for(let i = 0; i < numbers.length; i++)
    result += numbers[i]
  return result
}
// TODO: Sum the numbers in the following array using .reduce()
function numberListWithReduce() {
  let result = numbers.reduce(function(value, total) {return total += value})
  return result
}

console.log(nameListNoMap())
console.log(nameListWithMap())
console.log(nameListNoFilter())
console.log(nameListWithFilter())
console.log(numberListNoReduce())
console.log(numberListWithReduce())