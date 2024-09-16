//Problem 3: Largest prime factor
//Objective: What is the largest prime factor of the given number?

function largestPrimeFactor(number) {
  var largest
  var i = 2
  while(number > 1){
    if(number%i==0){
      number = number/i
    }else{
      i++
    }
  }
  largest = i
  return largest
}
