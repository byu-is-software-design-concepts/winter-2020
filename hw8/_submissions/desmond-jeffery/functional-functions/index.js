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

//Without .map() function
const pokeArray = [];
for (object of pokemon) {
    pokeArray.push(object["trainer"])
}

//.map() function
const pokeMap = pokemon.map(x => x["trainer"]);

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
for (m of monsters) {
    if (m["position"] == "Scarer") {
        scarers.push(m["name"])
    }
}

// TODO: Create an array containing only non-Scarers using .filter()
const nonScarer = monsters.filter(m => m["position"] != "Scarer")
const nonScarerName = nonScarer.map(m => m["name"])

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11];
// TODO: Sum the numbers in the following array without using .reduce()
let count = 0;
for (n of numbers) {
    count += n
}
// TODO: Sum the numbers in the following array using .reduce()
const sumFunction = (add, currValue) => add + currValue;

totalCount = numbers.reduce(sumFun)