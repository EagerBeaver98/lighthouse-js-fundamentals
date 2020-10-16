const merge = function (array1, array2){
  let final = []
  for (let x = 0; x < array1.length; x++){
    final.push(array1[x])
  }
  for (let y = 0; y < array2.length; y++){
    final.push(array2[y])
  }

  return final.sort()
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);