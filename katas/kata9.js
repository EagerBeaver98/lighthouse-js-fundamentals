const PI = 3.14159

const sphereVolume = function (radius){
  return (4 / 3) * PI * (radius ** 3)
}

const coneVolume = function (radius, height){
  return PI * (radius ** 2) * (height / 3)
}

const prismVolume = function (height, width, depth){
  return height * width * depth
}

const totalVolume = function (solids){
  let total = 0
  for (let x = 0; x <= solids.length; x++){
    if (solids['type'] === 'sphere'){
      total += sphereVolume(solids['radius'])
    }else if (solids['type'] === 'cone'){
      total += coneVolume(solids['radius'], solids['height'])
    }else if (solids['type'] === 'prism'){
      total += prismVolume(solids['height'], solids['width'], solids['depth'])
    }
  }
  return total
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);