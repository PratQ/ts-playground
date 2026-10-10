

class Person{

    public name:string;  //Public property = accessible everywhere
    protected age: number;   // Protected = accesible within the same class and child class
    private ssn: number; //Private = Accessible within the same class


    constructor(name: string, age: number, ssn: number) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    displayInfo(){
        console.log(`Name:${this.name}`)  //public = accessible
        console.log(`Age:${this.age}`)    //protected = accessible
        console.log(`SSN:${this.ssn}`)    //private = not accessible (only within the class its accessible)
       
    }
}


class Employee extends Person{

    private employeeId:number

    constructor(name: string, age: number, ssn: number,employeeId:number){
        super(name,age,ssn)
        this.employeeId = employeeId
    }

    showEmployeeDetails(){
        console.log(`Name:${this.name}`)  //public = accessible
        console.log(`Age:${this.age}`)    //protected = accessible
        //console.log(`SSN:${this.ssn}`)    //private = not accessible (only within the class its accessible)
        console.log(`EmployeeId: ${this.employeeId}`)//private = accessible since its in the same class
        }
    }

let emp = new Employee('John',32,1384812,44436)
emp.displayInfo()
emp.showEmployeeDetails()

console.log(emp.name) //name is from person class and has public attribute
// console.log(emp.age) //Not accessible since its in out of the class
// console.log(emp.ssn) //Not accessible