const firstObject = { name: 'Tushar', age: 21 }
const secondObject = { name: 'Tushar', age: 21 }
const thirdObject = firstObject;
if (firstObject == thirdObject) {
  // console.log('yes both objects are equal');
}
else {
  // console.log('no both objects are not equal');
}
//in js objects are compared based on their reference in the memory. If the reference is the same, then they will be equal. Otherwise they are not equal.
const firstObject2 = { name: 'Tushar', age: 21 }
const secondObject2 = { age: 21, name: 'Tushar' }
console.log(JSON.stringify(firstObject2));
console.log(JSON.stringify(secondObject2));
if (JSON.stringify(firstObject2) === JSON.stringify(secondObject2)) {
  // console.log('yes both are equal')
}
else {
  // console.log('no both are not equal');
}

const firstObject3 = { name: 'Tushar', age: 21 }
const secondObject3 = { age: '21', name: 'Tushar' }
console.log(Object.keys(firstObject3))
function compareObjects(obj1, obj2) {
  if (Object.keys(firstObject3).length !== Object.keys(secondObject3).length) {
    return false;
  }
  for (const prop in obj1) {
    console.log(prop)
    if (obj1[prop] !== obj2[prop]) {
      return false;
    }


  }
  return true;
}
const result = compareObjects(firstObject3, secondObject3);
console.log(result);