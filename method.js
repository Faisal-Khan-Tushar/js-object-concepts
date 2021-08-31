const student = {
  name: 'Faisal Khan Tushar',
  university: 'Daffodil International University',
  age: 21,
  balance: 5000,
  major: 'Computer Science & Engineering',
  subjects: ['Assembly Language', 'Numercial Methods', 'Math for Comptuer Science', 'Object Oriented Programming'],
  teachers: {
    name: 'Ms. Farhana',
    subject: 'Assembly Language'
  },

  giveExam: function () {
    console.log('Yes I am giving an exam right now');
  },
  treatDe: function (amount, tip) {
    this.balance = this.balance - amount - tip;
    return this.balance;
  }

}
// student.giveExam();
// console.log(student.name, student.university, student.age, student.major, student.subjects[0])
const remainingBalance = student.treatDe(1000, 100);
const remainingBalance2 = student.treatDe(600, 100);
console.log(remainingBalance2)