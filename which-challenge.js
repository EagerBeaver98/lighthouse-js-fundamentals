const whichSchool = function(age) {
  if (age < 13){ //check youngest age
    return 'Elementary School'
  }else if (age >= 13 && age <= 18){ //check middle age
    return 'Secondary School' ;
  }else if (age >= 19) { //all other
    return 'Lighthouse Labs'
  }
}
console.log(whichSchool(19))