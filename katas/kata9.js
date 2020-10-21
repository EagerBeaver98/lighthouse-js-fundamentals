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

