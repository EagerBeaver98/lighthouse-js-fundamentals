function range(start, end, step){
  let array = []
  if(start === undefined || end === undefined || step === undefined || step <= 0){
    array = []
  }else {
    for (let calc = start; calc <= end; calc += step){
      array.push(calc)
    }
  }
  return array
}
console.log(range(0, 5, -1))