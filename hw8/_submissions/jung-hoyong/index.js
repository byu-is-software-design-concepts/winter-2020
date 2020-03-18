// .map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const partners = [
  { name: 'Onix', trainer: 'Brock' },
  { name: 'Pikachu', trainer: 'Ash Ketchum' },
  { name: 'Staryu', trainer: 'Misty' },
  { name: 'Torchic', trainer: 'May' },
  { name: 'Victreebel', trainer: 'James' },
  { name: 'Wobbuffet', trainer: 'Jessie' },
]

const trainers = []
partners.forEach(partner => {
  trainers.push(partner.trainer)
})

const pokemon = []
partners.map(partner => {
  pokemon.push(partner.name)
})

// .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const monsters = [
  { name: 'Celia', position: 'Receptionist' },
  { name: 'Fungus', position: 'Scaring Assistant' },
  { name: 'Henry J. Waternooose III', position: 'CEO' },
  { name: 'James P. Sullivan', position: 'Scarer' },
  { name: 'Mike Wazowski', position: 'Scaring Assistant' },
  { name: 'Randall Boggs', position: 'Scarer' },
  { name: 'Roz', position: 'Undercover Agent' },
]

const scarers = []
monsters.map(monster => {
  if (monster.position === 'Scarer') {
    scarers.push(monster)
  }
})

const nonScarers = monsters.filter(monster => monster.position !== 'Scarer')

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 11]

let sum1 = 0
numbers.forEach(num => {
  sum1 += num
})

const sum2 = numbers.reduce((a, b) => a + b)
