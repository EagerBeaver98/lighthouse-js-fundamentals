const numberOfVowels = function(data){
  let count = 0
  for (x = 0; x < data.length; x++){
    if (data[x] === 'a' || data[x] === 'e' || data[x] === 'i' || data[x] === 'o' || data[x] === 'u'){
      count = count + 1
    }
  }
  return count
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));