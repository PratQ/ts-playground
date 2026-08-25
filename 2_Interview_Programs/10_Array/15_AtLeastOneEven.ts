export{}

// 15. Check if at least one element is even using some.
/* 
    Some() return the boolean vlaue.
*/

const nums : number[] = [2,3,4,5,6,7,8]//[3,5,7,9,1]
const hasEven  = nums.some(( n : number) => n % 2 === 0)
console.log(`Does the nums array has at least one even number: ${hasEven}`)


// If want to get the first even value then use find
// If the match doesnot find it will return: undefined.
let firstEven = nums.find((n : number) => n % 2 === 0 )
console.log(`The first even number in the nums array is: ${firstEven}`)

