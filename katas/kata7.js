const checkAir = function (samples, threshold){
  let count = 0
  let answer = ''
  for (let x = 0; x < samples.length; x++){
    if (samples[x] === 'dirty'){
      count += 1
    }
  }
  if (count/samples.length >= threshold){
    answer += 'Polluted'
  }else if (count/samples.length < threshold){
    answer += 'Clean'
  }
  return answer
}


console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))