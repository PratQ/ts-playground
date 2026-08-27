export{}
// 25. Check if a string starts with a specific word using startsWith(). 

const inputString:string = 'Name is Bond, James Bond!'


const isStartWith:boolean = inputString.startsWith('Name')
console.log(`Does this string starts with the word 'Name': ${isStartWith}`)

const isStartWith1:boolean = inputString.startsWith('Nam')
console.log(`Does this string starts with the word 'Nam': ${isStartWith1}`)

const isStartWith2:boolean = inputString.startsWith('nam')
console.log(`Does this string starts with the word 'nam': ${isStartWith2}`)