const instructorWithLongestName = function (instructors){
  let longest = 0;
  let position = 0;
  for (x = 0; x < instructors.length; x++){
    if (instructors[x]['name'].length > longest){
      position = x
      longest = instructors[x]['name'].length
  }
  }
  return instructors[position]
}


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));