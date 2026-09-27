class Calculator{

    // Consturctor overloading
    constructor();
    constructor(a:number, b:number);

    constructor(a?:number, b?:number){
    if(a !== undefined && b !== undefined){
        console.log('Sum of a and b is:',(a+b))
    }
    else{
        console.log('In the default constructor')
    }
    }


    // Method overloading
    add(a:number, b:number):number;
    add(a:number,b:number,c?:number):number

    add(a:number,b:number,c?:number):number{
        if(c !== undefined){
            return a+b+c
        }
        return a+b
    }
}


//Calling constructor
let cal1 = new Calculator()
let cal2 = new Calculator(10,20)


// Calling method
console.log('adding 2 numbers',cal1.add(10,5));
console.log('adding 3 number', cal2.add(10,7,3));