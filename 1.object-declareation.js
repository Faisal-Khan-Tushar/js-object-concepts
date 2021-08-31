//There are many ways we can delcare an object.
//1.Object literall (literally we will declare an object like this)
const footBaller = { name: 'Harry kane', club: 'Tottenham', age: 28 };
// console.log(footBallers);

//2.using constructor 
const footBaller2 = new Object();
// console.log(footBaller2)

//3.using object.create,here it works like inhertiance, so we have to declare what parent object it will inherit from, otherwise if there are no parents then we have to just give null as a parameter.
const footBaller3 = Object.create(null);
const footBaller4 = Object.create(footBaller);
// console.log(footBaller4.name, footBaller4.club, footBaller4.age)
// console.log(footBaller3)

//4.using a class ( syntactic sugar)
class NewFootBaller {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const CristianRomero = new NewFootBaller('Cristian Romero', 23);
// console.log(CristianRomero)
//. using a fucntion

//5. using a function 
function anotherNewFootballer(name) {
  this.name = name;
}
const KylianMbappe = new anotherNewFootballer('Kylian Mbappe');
console.log(KylianMbappe)