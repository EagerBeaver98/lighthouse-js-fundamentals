for (let num = 100; num < 201; num++){ //counter
  if(num % 3 === 0 && num % 4 === 0){ //remander checker for 3
    console.log("LoopyLighthouse")
  }else if (num % 3 === 0){ 
    console.log('Loopy')
  }else if (num % 4 === 0){
    console.log('Lighthouse')
  }else{
    console.log(num)
  }
}
