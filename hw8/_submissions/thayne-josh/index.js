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
const arr = [];
for(item of pokemon) {
  arr.push(item.trainer);
}
// TODO: Create an array of all the pokemon names using .map()
const map_arr = pokemon.map(item => {
  return item.name;
})






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
const scarers = [];
for (let i = 0; i < monsters.length; i++) {
  if(monsters[i].position === 'Scarer') {
    scarers.push(monsters[i]);
  }
}
// TODO: Create an array containing only non-Scarers using .filter()
const non_scarers = monsters.filter(monster => {
  return monster.position != 'Scarer';
})


// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let num = 0;
for(let i = 0; i < numbers.length; i++) {
  num += numbers[i]
}
// TODO: Sum the numbers in the following array using .reduce()
const total = numbers.reduce((sum, num) => {
  return sum + num;

})
console.log(total)
