/*
    Class
    Read Only properties
    Optional Properties

    Static Property/Variable and Methods
        a. Static properties are shared by across all the objects
        b. Static properties are accessed by the class name and not by this keyword
        c. Static properties/Methods can be changed by any objects and it will reflect everywhere  
*/

class Student
{
readonly studentId:number;
name:string;
email?:string;
static schoolName:string = 'Lotus English School'

//Constructor
constructor(id:number,name:string,email?:string){
this.studentId = id;
this.name = name;
this.email = email;
}


//Methods
dispalyInfo():void{
    console.log('Student id is: ',this.studentId)
    console.log('Student name is: ',this.name)

if(this.email){
 console.log('Student email is: ',this.email)
}
else{
    console.log('Email is not provided')
}
    console.log('School name is: ',Student.schoolName)   //to access the static properties use class name instead of this keyword
}  

//static method
static changeSchoolName(newName:string):void{
    Student.schoolName = newName;
}
}

//Usage
let s1 =new Student(1,'Rahul');
let s2 =new Student(2,'Sagar','ksagar@gamila.com');

//Display
s1.dispalyInfo();
s2.dispalyInfo();

//Reassigning value
//s1.studentId =101;  // error => Cannot assign to 'studentId' because it is a read-only property.
s1.email = 'rahul1@yahoo.com'
s1.dispalyInfo();

//change the static property using static method
Student.changeSchoolName('Gurukul Shikshan Sanstha')

console.log('Properties after changing the static property name')
s1.dispalyInfo();
s2.dispalyInfo();