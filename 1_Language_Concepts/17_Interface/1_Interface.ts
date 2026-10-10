export{}

/*
    1. Interface in Typescript is way to define the structure of an object.
    2. It tells compiler what properties and types an object should have.
    3. Its like a blueprint of an objects.
    
Abstract Methods: No impletmentation of methods just a signature of methods


interface InterfaceName{
    properties
    abstract methods
}

*/ 

//1. Basic interface

interface Person{
    name:string,
    age:number
}

let student: Person = {
    name: 'John',
    age: 34
}
console.log(student.name)
console.log(student.age)
console.log(student)



// 2. Optional Properties

interface Employee{
    id: number,
    name: string,
    department? :string 
}

let emp1: Employee = {
    id:101,
    name: 'Mike'
}

let emp2: Employee = {
    id: 102,
    name: 'Ryan',
    department: 'Admin'
}

console.log(emp1.id,emp1.name,emp1.department)
console.log(emp2.id,emp2.name,emp2.department)


// 3. ReadOnly properties
interface Book{
    title: string,
    readonly isbn: string

    display(): void    //abstract method
}

let b1: Book = {
    title : 'Learn TypeScript',
    isbn : '14218371hj1h2',

    display(){
        console.log(b1.title,b1.isbn)
    }
}

console.log(b1.title)
console.log(b1.isbn)
b1.display();
console.log('After changing the values of properties')
b1.title = 'Learn Python'
//b1.isbn = '123-KDAK'     //Cannot assign to 'isbn' because it is a read-only property.ts(2540)



// 4. Extending Interface (Inheritance applicable)

interface Animal
{
    name: string 
}

interface Dog extends Animal{
    breed: string
}

let myDog : Dog = {
    name: 'Tom',
    breed: 'German shefard'
}

console.log(myDog.name,myDog.breed)

/*
    1. Class can extend class
    2. Interface can extend interface
    3. So between Interface and class, extension wont work
    4. Class can implement interface
*/ 

interface Bird{
    name:string;
    sound(): void
}

class Parrot implements Bird{
    //even it is alreadt=y defined in the interface, we have to redefine it
    name:string;     //Inheritated from interface
    colour:string;   //Property belongs to Bird
   
    constructor(name:string,colour:string){
        this.name = name,
        this.colour = colour
    }

    sound(){
        console.log('squawak...')
    }
}

let pet = new Parrot('Alex','Green')
console.log(pet.name,pet.colour)
pet.sound()