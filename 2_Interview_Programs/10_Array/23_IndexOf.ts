export{}

// 23. Find the position of a word using indexOf(). 

const inputString = 'Hello there!'
const firstL:number = inputString.indexOf('l')
console.log(`Index of first l in the above string is: ${firstL}`)

// How to find second l
const secondL:number = inputString.indexOf(`l`,firstL + 1)
console.log(`Index of second l in the above string is: ${secondL}`)