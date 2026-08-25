export{}

// 18. Reverse an array. 
const arr:(string | number)[] = [1,'Sam',2,'Rahul',3,'Virat',4,'Rohit']


// Method1: using reverse()
const revArray: (string | number)[] = arr.reverse()
console.log(`Reverse array is: ${revArray}`)


// Method2
const arr1:(string | number)[] = [1,'Jimmy',2,'Marsh',3,'Clinton',4,'Andre',5,'Kevin']
let revArray1:(string | number)[] = []
for (let i = arr1.length-1; i >= 0; i--)
{
    revArray1[revArray1.length] = arr1[i]
}
console.log(`Reverse array is: ${revArray1}`)