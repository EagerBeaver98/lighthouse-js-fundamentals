function isOdd(num){
  let address;
  if (num % 2 === 0){
    address = false
  }else{
    address = true
  }
  return address
}
console.log(isOdd(14))