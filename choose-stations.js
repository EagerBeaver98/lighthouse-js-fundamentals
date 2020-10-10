const stations = [
  ['Big Bear Donair', 20, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const chooseStations = function (stations){
  let goodStations = []
  for (let x = 0; x < stations.length; x++){
      if (stations[x][1] >= 20 && (stations[x][2] === 'school' || stations[x][2] === 'community centre')){
        goodStations.push(stations[x][0])
        }
      }
  return goodStations
}
console.log(chooseStations(stations))