const randomReserves = days => {
  const randomDate = (start, end) => new Date(+start + Math.random() * (end - start)),
  addDays = days => new Date().setDate(new Date().getDate() + days),
  randomNumbers = (start, length) => Array.from(new Set(Array.from({length: 10}, () => Math.floor(Math.random() * length + start)))),

  newDate = new Date(),
  lastDate = addDays(days),
  randomDates = {}
  
  for (let index = 0; index < days; index++) {
    const randomDateString = randomDate(newDate, lastDate).toISOString().split('T')[0]
    randomDates[randomDateString] = randomNumbers(12, 11)
  }

  return randomDates
},

createTables = length => Array.from({length}, (v, i) => v = {
  number: i + 1,
  id: crypto.randomUUID(),
  reserves: randomReserves(20)
})

export default {
  2: createTables(7),
  3: createTables(6),
  6: createTables(3),
}