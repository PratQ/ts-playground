export{}

// Remove duplicates from an array using filter and indexOf.

const numArray:number[] = [2,5,7,2,4,5,6,7,8]
let uniqueArrya:number[] = numArray.filter((item,index) => numArray.indexOf(item) === index)
console.log(numArray)
console.log(uniqueArrya)
