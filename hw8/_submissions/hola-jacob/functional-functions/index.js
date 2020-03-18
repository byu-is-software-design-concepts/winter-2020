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
function listTrainer(props){
  let trainerList =[]
  for (let group of Object.values(pokemon)){
    
    trainerList.push(group.trainer)
  }
  return trainerList
}
 //console.log(listTrainer())

// TODO: Create an array of all the pokemon names using .map()
function listPokemon(props){
  const pokemonList = pokemon.map(pokemon=> pokemon.name)
  return pokemonList
}
//console.log(listPokemon(pokemon))

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
function getScars(props){
  const scarers = []
  for (monster of props){
    if (monster.position === 'Scarer'){
      scarers.push(monster)
    }
  }
  return scarers
}
//console.log(getScars(monsters))
// TODO: Create an array containing only non-Scarers using .filter()
function getNonScar(props){
  const nonScar = props.filter(monster=>monster.position !== 'Scarer')
  return nonScar
}
//console.log(getNonScar(monsters))

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
function dontUseReduer(){
  let totalNums = 0
  numbers.forEach(number => (totalNums += number))
  return totalNums
}
//console.log(dontUseReduer())
// TODO: Sum the numbers in the following array using .reduce()
function useReducer(){
  const allNums = numbers.reduce((accumulator, value) => accumulator + value)


  return allNums
}

//console.log(useReducer())
