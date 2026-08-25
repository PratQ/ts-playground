export{}

// Check if all elements are positive using every.

let numberArray:number[] = [1,3,5,2,6,8,-9]
const isAllElementsPositive: boolean = numberArray.every(n => n>0)
console.log(`Is all the element of the array are positve: ${isAllElementsPositive}`)