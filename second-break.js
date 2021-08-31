/*

normal for loop
for(i=0;i<10;i++){

}
for loop for an array
for(const number of numbers){

}
for loop for an object
for(const properties in student){

}

*/
const myObject = {
  name: 'Table clock',
  price: 200,
  color: 'Matte black'
}
// console.log(myObject)
for (const prop in myObject) {
  // console.log(prop, myObject[prop]);
}
//2nd way using keys
// const keys = Object.keys(myObject);
// console.log(keys);
for (const prop of Object.keys(myObject)) {
  // console.log(prop, myObject[prop])
}
//3rd way using entries
const entries = Object.entries(myObject);
// console.log(entries);
for (const [key, value] of Object.entries(myObject)) {
  // console.log(key, value)
}
//object comparing
const student1 = { name: 'Tushar', age: 15 }
const student2 = { name: 'Tushar', age: 15 }
if (student1 == student2) {
  // console.log('yes both are equal')
}
else {
  // console.log('no both are not equal');
}
//first way to solve it. 
const student3 = { name: 'Tushar', age: 15 }
const student4 = { age: 15, name: 'Tushar' }
// console.log(JSON.stringify(student3));
// console.log(JSON.stringify(student4));
if (JSON.stringify(student3) === JSON.stringify(student4)) {
  // console.log('yes both are equal')
}
else {
  // console.log('no both are not equal')
}

//3rd way to counter errors that occured in the 2nd process
const student5 = { name: 'Tushar', age: 15 }
const student6 = { age: '15', name: 'Tushar' }
const keys = Object.keys(student5);
console.log(keys)
function compareObjects(object1, object2) {
  if (Object.keys(student5).length !== Object.keys(student6).length) {
    return false
  }
  for (const prop in object1) {
    if (object1[prop] !== object2[prop]) {
      return false;
    }
  }
  return true;
}
const res = compareObjects(student5, student6);
// console.log(res)
//object binding 
const tushar = {
  id: 101,
  name: 'Faisal Khan Tushar',
  balance: 5000,



  treatDe: function (amount) {
    this.balance = this.balance - amount;
    console.log(this)
    return this.balance;
  }

}
const sneha = {
  id: 102,
  name: 'khadija khan sneha',
  balance: 8000
}
const alvi = {
  id: 103,
  name: 'Towhid Hossain Alvi',
  balance: 7000
}
tushar.treatDe(1000)
const snehaTreatDao = tushar.treatDe.bind(sneha);
const alviTreatDao = tushar.treatDe.bind(alvi);
snehaTreatDao(500)
snehaTreatDao(500)
alviTreatDao(700)