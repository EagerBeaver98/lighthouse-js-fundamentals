let name = ''
let birth = Number
let date = Number
const ageCalculator = function (name, birth, date){
  let age = date - birth
  return name + ' is ' + age + ' years old.'
}
console.log(ageCalculator('Suzie', 1983, 2015))