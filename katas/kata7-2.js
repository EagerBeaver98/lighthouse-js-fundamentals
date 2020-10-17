const camelCase = function(input){
  let final = ''
  for (let x = 0; x < input.length; x++){
    if (input[x] === ' '){
      final += input[x + 1].toUpperCase()
      x ++
    }else if (input[x] !== ' '){
      final += input[x]
    }

  }
  return final
}


console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));