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
let arrTrainer = []
for(let x in pokemon){
  arrTrainer.push(pokemon[x].trainer);
}
console.log(arrTrainer)
// TODO: Create an array of all the pokemon names using .map()
let arrTrainerMap = pokemon.map(p => p.trainer)
console.log(arrTrainerMap)
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
let arrScarers = []
for(x in monsters){
  if(monsters[x].position == "Scarer") {
    arrScarers.push(monsters[x].name)
  }
}
console.log(arrScarers)
// TODO: Create an array containing only non-Scarers using .filter()
let arrScarersFilter = monsters.filter(p => p.position != "Scarer").map(p => p.name)
console.log(arrScarersFilter)
// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let num = 0
for(x in numbers){
  num += numbers[x]
}
console.log(num)
// TODO: Sum the numbers in the following array using .reduce()
console.log(numbers.reduce((total, num) => {return total + num}))
