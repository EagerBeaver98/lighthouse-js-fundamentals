let array = []

function lastIndexOf(array, num){
  let index
  for (let x = array.length; x >= 0; x--){
    if (array === []){
      index = -1
    }else if (array[x] === num){
      index = x
      return index
    }else {
      index = -1
    }
  }
  return index
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);