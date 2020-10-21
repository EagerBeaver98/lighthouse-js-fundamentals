const multiplicationTable = function (maxValue){
  let final = ''
  for (let x = 1; x <= maxValue; x++){
    for (let y = 1; y<= maxValue; y++){
      final += (y * x) + ' '
    }
    if (maxValue !== x){
      final += '\n'
    }
  }
  return final
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));