class Car{
   
    name: string;
    colour:string;
    model:string;

    constructor(name:string,colour:string,model:string){
        this.name = name;
        this.colour = colour;
        this.model = model;
    }

    start(){
        console.log(`Car starting....`)
    }

    stop(){
        console.log(`car stopped....`)
    }

    displayInfo(){
        console.log(`Name:${this.name},Colour:${this.colour},Model:${this.model}`)
    }
}

// Child class Honda
class Honda extends Car{

    year:number

    constructor(name:string,colour:string,model:string,year:number){
        super(name,model,colour)
        this.year = year
    }

    start(){
        console.log(`Honda starting.....`)
    }

    yom(){
        console.log(`YOM:${this.year}`)
    }

}

// Child class Maruti

class Maruti extends Car{
    year:Number

    constructor(name:string,colour:string,model:string,year:number){
        super(name,colour,model)
        this.year = year
    }

    start(){
        console.log('Maruti starting......')
    }

    yom(){
        console.log(`YOM:${this.year}`)
    }
}

//Object for Honda class
let honda = new Honda('Honda','Red','Honda City',2001)

console.log(honda.name)
console.log(honda.model)
console.log(honda.colour)
console.log(honda.year)
honda.start()           //child class i.e inheritated method
honda.displayInfo()     //Invoked from parent classs
honda.stop()
honda.yom()             //Parent class


//Object for Maruti class
let maruti = new Maruti('Maruti','Black','Maruti Brezza',2024)
maruti.start()
maruti.displayInfo()
maruti.stop()           //parent class
maruti.yom()            //child class


let car: Car = new Honda('Honda','Blue','Honda CRV',2021)  //Parent class holding child class object 
car.start()         //child class, implementing the child class
car.displayInfo()   //child class, implementing the child class
//car.yom()         since yom doesnt exit on Car and the oject type is also of car type hence not accessible.

//Inheritance concept comes from top to bottom i.e. from parent to child.