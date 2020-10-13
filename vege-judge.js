const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

const judgeVegetable = function (vegetables, metric){
  let highest = 0
  let position = 0
  for (let x = 0; x < vegetables.length; x++){
    if (vegetables[x][metric] > highest){
      highest = vegetables[x][metric]
      position = x
    }
    
  }
  return vegetables[position].submitter
}

console.log(judgeVegetable(vegetables, metric))