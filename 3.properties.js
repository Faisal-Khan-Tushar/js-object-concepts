const keyboard = {
  name: 'yn84',
  color: 'white',
  price: 9700,
  isSmooth: true,
  switches: 'gateron milkey yellows'
}
const justKeys = Object.keys(keyboard);
const justValues = Object.values(keyboard);
const bothKeysAndValues = Object.entries(keyboard);
// console.log(bothKeysAndValues);
//deleting a property
// Object.seal(keyboard);
Object.freeze(keyboard);
delete keyboard.switches;
delete keyboard.price;
keyboard.switches = 'Akko cs rose red'

console.log(keyboard);