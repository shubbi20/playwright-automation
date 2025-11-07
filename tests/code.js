module.exports = class Person {
age =25
//location = "Canada"
get location()
{
    return "Canada"
}

//constructor is method which executes by defualt when you create object of the class 
constructor(firstname, lastname)
{
this.firstname = firstname
this.lastname = lastname
}

//methods 
fullname()
{
console.log(this.firstname + this.lastname)
}



}
let person = new person(Yatendra, sharma)
let person1 = new person(Ankit, sharma)\
console.log(person.age)

console.log(person.location)
console.log(person.fullname())
console.log(person1.fullname())