// //how to declare an object
// //1.literal way
// // const student = {
// //   name: 'Faisal Khan Tushar',
// //   age: 21
// // }
// //2.with the help of constructor
// const newStudent1 = new Object();
// // console.log(newStudent1)

// //3.with the help of object.create()
// const newStudent2 = Object.create(student);
// // console.log(newStudent2.name, newStudent2.age)

// //4.with the help of class (syntactic sugar)
// class newStudent3 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }


// }
// const anotherOne = new newStudent3('Tushar Khan', 23);
// // console.log(anotherOne)

// //5. with the help of function 
// function newStudent4(name) {
//   this.name = name;
// }
// const newRes = new newStudent4('Tushar');
// // console.log(newRes)

//object method property
const student = {
  name: 'chirs rogers',
  age: 22,
  balance: 1999,
  university: 'university of atalanta',
  major: 'EEE',
  subject: ['English', 'Electornics', 'Semiconductor'],
  bestFriends: {
    name: 'Chirs Ruddy',
    major: 'Environmental Science'
  },
  giveExam: function (name) {
    console.log(this.name, 'yes I am giving exam right now')

  },
  giveTreat: function (amount, tips) {
    this.balance = this.balance - amount - tips;
    return this.balance;
  }
}
student.giveExam()
const remainingBalance = student.giveTreat(1000, 50)
// console.log(remainingBalance)

//playing with objects
const tableclock = {
  name: 'casio  table clock',
  color: 'matte black',
  price: 200,
  isClean: true
}
const justKeys = Object.keys(tableclock);
const justValues = Object.values(tableclock);
const bothValuesAndKeys = Object.entries(tableclock);

// console.log(bothValuesAndKeys)
// Object.seal(tableclock);
Object.freeze(tableclock);
delete tableclock.isClean;
tableclock.isClean = false;
tableclock.price = 5555;
console.log(tableclock)