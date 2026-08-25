export{}

// 20. Convert a string to uppercase using toUpperCase. 


// Method 1: using toUpperCase()
const inputString =  'HeLlo thEre!'
console.log(`String after converting to uppercase: ${inputString.toUpperCase()}`)


// Method 2: usign Traditional Method
let uppercaseString:string = ''
for(let i = 0; i <= inputString.length-1; i++)
{
    uppercaseString = uppercaseString + inputString[i].toUpperCase()
}
console.log(`Rverse string is: ${uppercaseString}`)