export{}

// 21. Convert a string to lowercase using toLowerCase. 
const inputString =  'HeLlo thEre!'



// Method 1: Using ToLowerCase()
console.log(`Lower case string: ${inputString.toLowerCase()}`)


// Method 2: Using ToLowerCase()
let lowerCaseString: string = ''
for(let i = 0; i <=inputString.length-1; i++)
{
    lowerCaseString += inputString[i].toLowerCase()
}
console.log(`Input string in lower case format is: ${lowerCaseString}`)
