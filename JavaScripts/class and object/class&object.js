// // const student={
// //     name:"Ullas",
// //    age:19,
// //    place:"Bangalore"
// // }
// // console.log(student.age)
// // const person={
// //     name:["Ullas","ABC"],
// //     age:19,
// //     bio()
// //     {
// // console.log(`${this.name[1]} is ${this.age} old`)
// //     }
// // }
// // console.log(person.bio())

// const employee={
//     tax()
//     {
//         console.log("30%")
//     }
// }

// let karanarjun1={
//     salary:50000
// }
// let karanarjun2={
//     salary:50000
// }
// let karanarjun3={
//     salary:50000
// }
// let karanarjun4={
//     salary:50000
// }
// let karanarjun5={
//     salary:50000
// }
// let karanarjun6={
//     salary:50000
// }

// karanarjun1.__proto__=employee
// karanarjun2.__proto__=employee
// karanarjun3.__proto__=employee
// karanarjun4.__proto__=employee
// karanarjun5.__proto__=employee
// employee.__proto__=karanarjun6

// let arr1=[1,2,3,45,67,89]
// arr1.push(10)
// console.log(arr1.push(234))
// employee.__proto__=arr
// karanarjun1.__proto__=arr

//class
// class Car
// {
//     start(num1,num2)
//     {
//        return num1+num2
//     }

//     stop()
//     {
//         console.log("Bye bro")
//     }

//     sum(num)
//     {
//         this.num=num
//         console.log(this.num)
//     }
// }

//  toyata=new Car()
// console.log(toyata.start(12,45))
// console.log(toyata.sum(12))


// class Car {

//  constructor(brand)
//  {
//     console.log("This is Construotr")
//     this.brand=brand
//     console.log(`Name os Constructor is ${this.brand}`)
//  }

//     start() {
//         console.log("Car has Started")
//     }
//     stop() {
//         console.log("Car has Stop")
//     }
//    setBrand(brand)
//    {
//     this.brand=brand
//     console.log(`Name os this Brand is ${this.brand}`)
//    }
// }

// let car=new Car("ABC")
// console.log(car )
// car.setBrand("ullas")

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     heel() {
//       return this;
//     }
// };

// console.log('this in object method', person.heel());

// const student={
// firstName:"Ullas",
// lastName:"Gowda",
// bio()
// {
//     return this
// }
// }
// console.log(student.bio())

// const bio=()=>
// {
//     console.log("This is bio function",this)
// }q
// bio()

// const person1=
// {
//     person1_firstName:"Ullas",
//     person1_lastName:"Gowda",
//      bio()
//     {
// console.log(`person_firstName ${this.person1_firstName}  person_lastName ${this.person1_lastName}`)
//     }
// }
// function person2Name(name,Dod)
// {
// console.log(`person2_FirstName ${name} person2_SecondName ${Dod}`);
//  obj1 ={
//     name1:"ABC",
//     surname1:"DEF",
//     Dob1:"12-34-56",
//     bio1()
//     {
//       console.log(`${this.name1} ${this.Dob1} ${this.surname1}`);
//     }
// };

// }
// // console.log(person1.bio.call(person2Name("Vaibhav","KS")))
// person2Name('qw',23).call(obj1.bio1())


// class Parent
// {
// bio()
// {
//     console.log("Hello i am Parents of Child Class")
// }

// Status()
// {
//     console.log("I am a full stack developer")
// }
// }

// class Child extends Parent
// {
//     sleep()
//     {
// console.log("It's my sleeping Time")
//     }
// }
//  let parent=new Parent()
//  let child=new Child()

// class Sum{
// constructor(x,y)
// {
// this.x=x
// this.y=y
// }

// }
// class Addition extends Sum{
//     constructor(x,y)
//     {
//         super(x,y);
//       console.log("Addition of two number is",this.x+this.y)
//     }


// }
// class Subtraction extends Sum{
//     constructor(x,y)
//     {
//         super(x,y);
//       console.log(this.x-this.y)
//     }
// }
// class Multiplication extends Sum{
//     constructor(x,y)
//     {
//         super(x,y);
//       console.log(this.x*this.y)
//     }
// }
// class Divsion extends Sum{
//     constructor(x,y)
//     {
//         super(x,y);
//       console.log(this.x/this.y)
//     }
// }

// const sum=new Sum()
// const addition=new Addition(12,56)
// const division=new Divsion()
// const subtraction=new Subtraction()
// const multiplication=new Multiplication()

// console.log(`Addition of two number is ${addition}`)
// class person{
//     constructor(branch)
//     {
//     this.branch=branch
//         console.log("This is super function ",this.branch)
//     }
// }

// class employee extends person
// {
//     constructor(branch)
//     { super(branch);
//         // this.branch=branch
//     }

//     work()
//     {
//         console.log("Super Keyboard")
//     }
// }
//  let per = new person("Adarsh")
//  let emp= new employee("Ullas")
// console.log(emp.__proto__=per)

//Try catch
// try {
//   let a=10
//   let b="Ullas"
//   console.log(c-a)
// } catch (e) {
//   console.log(e)
// }


























































