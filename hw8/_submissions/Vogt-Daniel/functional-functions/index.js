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

//Create an array of all the pokemon trainer's names without using .map()
let arrTrainers = []

for (let i = 0; i < pokemon.length; i++){
  arrTrainers.push(pokemon[i].trainer)
}

// Create an array of all the pokemon names using .map()
let arrPokemon = pokemon.map(x => x.name)

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
let arrScarers = []

for (let i = 0; i < monsters.length; i++){
  position = monsters[i].position
  name = monsters[i].name
  if (position.includes("Scar")){
    arrScarers.push(name)
  }
}

// Create an array containing only non-Scarers using .filter()
arrNonScarers = monsters.filter(x => !x.position.includes("Scar"))

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// Sum the numbers in the following array without using .reduce()
let sum = 0;
for (number in numbers){
  sum += parseInt(number)
}

// Sum the numbers in the following array using .reduce()
let sumReduce = numbers.reduce((acc, val) => acc + val)
