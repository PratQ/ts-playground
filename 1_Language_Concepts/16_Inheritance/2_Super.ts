/*
super() is used to invoke immediate parent class constructor
super is used to invoke immediata parent class method
super can't be used to invoke parent class property whereas in Java it is possible

*/ 

class Parent{

    num:number = 10;

    constructor(){
        console.log('This is the parent class constructor')
    }

    display(){
        console.log('This is the parent class method')
    }
}

class Child extends Parent{

    num:number = 20

    constructor(){
        super()
        console.log('This is the child class constructor')
    }

    show(){
        //console.log(super.num)     In TypeScript super doesnt support for the property
        console.log(this.num)
        console.log('This is the show method')
    }

    display(){
        console.log('This is the child class display method')
    }
}

let child = new Child()
child.show()
