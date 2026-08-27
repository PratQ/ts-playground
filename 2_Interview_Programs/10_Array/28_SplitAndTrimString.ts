export{}

// 28. Split a sentence into words using split() and remove leading/trailing spaces using trim(). 

// type 1
const userInput:string = '     Hello Java, I love Java      '

const trimedString  = userInput.trim()
console.log(trimedString)

const splitString = trimedString.split(',')
console.log(splitString)

// type2
const modifiedString = userInput.trim().split(" ")
console.log(modifiedString)