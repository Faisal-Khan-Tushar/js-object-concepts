const kibria = {
  id: 101,
  name: 'RJ Kibria',
  money: 5000,
  treatDey: function (expense, tips, tax) {
    this.money = this.money - expense - tips - tax;
    console.log('here555', this);
    return this.money;
  }


}

const heroBalam = {
  id: 102,
  money: 6000,
  name: 'Hero Balam',

}
const normalGolam = {
  id: 102,
  money: 8000,
  name: 'Normal Golam',

}
// const kibriaDeTreat = kibria.treatDey.bind(heroBalam)
// kibriaDeTreat(1000)
// kibria.treatDey.call(heroBalam, 1000)
// kibria.treatDey.call(heroBalam, 2000)
kibria.treatDey.call(normalGolam, 1000, 200, 10)
kibria.treatDey.apply(heroBalam, [1000, 100, 10])