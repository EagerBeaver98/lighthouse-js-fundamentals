const sumLargestNumbers = function (array){
  array.sort()
  let highest = 0
  let secondHighest = 0
  for (x = 0; x < array.length; x++){
    if (array[x] > highest){
      secondHighest = highest
      highest = array[x]
    }
  }
  return highest + secondHighest

}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 3, 2]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));