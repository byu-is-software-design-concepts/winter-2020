// .map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const teams = [
  { name: "Onix", trainer: "Brock" },
  { name: "Pikachu", trainer: "Ash Ketchum" },
  { name: "Staryu", trainer: "Misty" },
  { name: "Torchic", trainer: "May" },
  { name: "Victreebel", trainer: "James" },
  { name: "Wobbuffet", trainer: "Jessie" }
];
// TODO: Create an array of all the pokemon trainer's names without using .map()
const trainers = []
for (t of teams) {
  trainers.push(t.trainer)
}

// TODO: Create an array of all the pokemon names using .map()
const pokemon = teams.map(t => t.name)

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
const scarers = []
for (m of monsters) {
  if (m.position === "Scarer") {
    scarers.push(m.name)
  }
}

// TODO: Create an array containing only non-Scarers using .filter()
const nonScarers = monsters.filter(m => m.position !== "Scarer")

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];

// TODO: Sum the numbers in the following array without using .reduce()
let total = 0
for (n of numbers) {
  total += n
}

// TODO: Sum the numbers in the following array using .reduce()
const totalReduce = numbers.reduce((acc, val) => acc + val)