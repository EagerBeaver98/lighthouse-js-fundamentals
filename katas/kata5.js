const urlEncode = function (text){
  let temp = ''
  for (let x = 0; x < text.length; x++){
    if (text[x] !== ' '){
      temp += text[x]
    }else if (x === 0 || x === (text.length - 1))
      temp = temp
    else if (text[x] === ' '){
      temp += '%20'
    }
  }
  return temp
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
