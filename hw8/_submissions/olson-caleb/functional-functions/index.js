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
function getName(item) {
  var name = item.name;
  return name;
}
// TODO: Create an array of all the pokemon trainer's names without using .map()
const names_mapless = []
for (var i = 0; i < pokemon.length; i++) {
  names_mapless.push(getName(pokemon[i]))
}
// TODO: Create an array of all the pokemon names using .map()
const names_map = pokemon.map(getName)

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
function checkScarer(item) {
  var position = item.position
  return position != 'Scarer'
}
// TODO: Create an array containing only Scarers without using .filter()
const position_filterless = []
for (var i = 0; i < monsters.length; i++) {
  if (checkScarer(monsters[i]) == false) {
    position_filterless.push(monsters[i])
  }
}
// TODO: Create an array containing only non-Scarers using .filter()
const position_filter = monsters.filter(checkScarer)

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
function getSum(total, num) {
  return total + Math.round(num);
}
// TODO: Sum the numbers in the following array without using .reduce()
var sum = 0
for (var i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i]
}
// TODO: Sum the numbers in the following array using .reduce()
const sum_reduced = numbers.reduce(getSum)
