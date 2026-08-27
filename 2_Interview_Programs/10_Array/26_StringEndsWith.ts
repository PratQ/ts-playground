export{}

// 26. Check if a string ends with a specific word using endsWith().

const inputString:string = 'Name is Bond, James Bond!'

const doesStringEndsWith:boolean = inputString.endsWith('Bond!')
console.log(`Does the 'inputString' ends with the string 'Bond!': ${doesStringEndsWith}`)
const doesStringEndsWith2:boolean = inputString.endsWith('bond!')
console.log(`Does the 'inputString' ends with the string 'bond!': ${doesStringEndsWith2}`)
const doesStringEndsWith1:boolean = inputString.endsWith('Bond')
console.log(`Does the 'inputString' ends with the string 'Bond': ${doesStringEndsWith1}`)
const doesStringEndsWith3:boolean = inputString.endsWith('bond')
console.log(`Does the 'inputString' ends with the string 'bond': ${doesStringEndsWith3}`)
