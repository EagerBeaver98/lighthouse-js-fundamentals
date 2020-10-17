const multiplicationTable = function (maxValue){
  let final = ''
  for (let x = 1; x <= maxValue; x++){
    for (let y = 1; y <= x * maxValue; y++){
      if (x % y === 0){
        final += y + ' '
      }
    }
    final += '\n'
  }
  return final
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));