const tushar = {
  id: 101,
  name: 'Faisal Khan Tushar',
  balance: 5000,



  treatDe: function (amount) {
    this.balance = this.balance - amount;
    console.log('here555', this)
    return this.balance;
  }

}
const sneha = {
  id: 102,
  name: 'Khadija khan Sneha',
  balance: 8000
}
tushar.treatDe(500);
const snehaTreatDe = tushar.treatDe.bind(sneha);
snehaTreatDe(1000);