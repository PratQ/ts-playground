export{}

// 19. Find the length of a string. 

const inputString: string = 'Exploring TypeScript!'

// Method1: Using length (Note: its not a method, its attibute/property)
const lengthOfString: number = inputString.length
console.log(`The length of the inputString is: ${lengthOfString}`)


//Method2: Using the traditional method
let lengthOfStr: number = 0
for(let j =0; inputString[j] !== undefined; j++)
{
    lengthOfStr++
}
console.log(`Calculated the length of string with traditional method: ${lengthOfStr}`)