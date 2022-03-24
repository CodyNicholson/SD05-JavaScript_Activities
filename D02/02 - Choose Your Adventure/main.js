function start(){
  let answer  = window.prompt('Do you head left, or right?')
  if(answer === 'left'){
     goLeft()
  } else if(answer === 'right') {
      goRight()
  }
}

function goLeft(){
  let answer = window.prompt(`You come across a stray cat. 
  It scampers off down a small hole, just large enough for you to crawl through. 
  Do you follow it, or continue on your path?`)
  if(answer === 'back'){
      leftOrRight()
  }
}

function goRight(){
  let answer = window.prompt(`You come across a snoring dragon. 
  On the other side of him, you see a shiny chest of treasure. Another path would 
  lead you away from the dragon all together. Which do you take?`)
  if(answer === 'back'){
      leftOrRight()
  }
}

start();
