//Project 5: Smallest Multiple
//Objective: Find the smallest positive number that is divisible by 1 to n

function smallestMult(n) {
  var i = 1
  var j = n;
  while (j > 0){
    if(i%j==0){
      j--
    }
    if(i%j>0){
      i++
      j = n;
    }
  }
  console.log(i);
  return i;
}

smallestMult(5);
