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

function create_array(pokemon){
  let trainerList = []
  for(let i = 0; i < pokemon.length; i++){
    trainerList.push(pokemon[i]['trainer'])
  }
  return trainerList
}

function map_array(pokemon){
  let trainerList = []
  pokemon.map(e =>{
    trainerList.push(e['trainer'])
  })
  return trainerList
}

console.log(create_array(pokemon))
console.log(map_array(pokemon))

// TODO: Create an array of all the pokemon trainer's names without using .map()
// TODO: Create an array of all the pokemon names using .map()

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

function list_scarers(monsters){
  let scarerList = []
  for(let i = 0; i < monsters.length; i++){
    if(monsters[i]['position'] === "Scarer"){
      scarerList.push(monsters[i])
    }
  }
  return scarerList
}

function filter_scarers(monsters){
  let scarerList = monsters.filter(monster => monster['position'] === "Scarer")
  return scarerList
}
// TODO: Create an array containing only Scarers without using .filter()
// TODO: Create an array containing only non-Scarers using .filter()
console.log(list_scarers(monsters))
console.log(filter_scarers(monsters))



// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
// TODO: Sum the numbers in the following array using .reduce()

function add_nums(numbers){
  let total = 0
  for(let i = 0; i < numbers.length; i++){
    total += numbers[i]
  }
  return total
}

function reduce_nums(numbers){
  let total = numbers.reduce((total, curr) => total + curr)
  return total
}

console.log(add_nums(numbers))
console.log(reduce_nums(numbers))
