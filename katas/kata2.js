const conditionalSum = function (values, condition){
  let array = 0
  for (x = 0; x < values.length; x++){
    if (condition === 'even'){
      if (values[x] % 2 === 0){
        array = array + values[x]
      }
    }else if (condition === 'odd'){
      if (values[x] % 2 !== 0){
        array = array + values[x]
      }
    }
  }
  return array
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));