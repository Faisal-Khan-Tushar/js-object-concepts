/* 
normal for loop
for(i=0;i<10;i++){

}
//for loop for arrays
for(const number of numbers){

}
//for loop for objects
for(const properties in students){

}
*/
const keyboard = {
  name: 'yn84',
  color: 'white',
  price: 9700,
  isSmooth: true,
  switches: 'gateron milkey yellows'
}
for (const properties in keyboard) {

  // console.log(properties, keyboard[properties])
}
const keys = Object.keys(keyboard);
console.log(keys);
for (const properties of keys) {
  // console.log(properties, keyboard[properties]);
}
const entries = Object.entries(keyboard);
console.log(entries);
for (const [key, value] of Object.entries(keyboard)) {
  console.log(key, value)
}