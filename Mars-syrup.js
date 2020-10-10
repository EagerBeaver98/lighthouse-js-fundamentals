const howManyHundreds = function (bottles){
  let ships;
  if (bottles % 100 === 0){
    ships = bottles / 100
  }else if (bottles % 100 !== 0){
    ships = (bottles - (bottles % 100)) / 100
  }
  return ships
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);