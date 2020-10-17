const repeatNumbers = function (array){
  let answer = ''
  for (let x = 0; x < array.length; x++){
    for (let y = 0; y < array[x][1]; y++){
      answer += array[x][0]
    }
  }
  return answer
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));