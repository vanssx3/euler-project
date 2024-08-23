//Problem 1: Multiples of 3 or 5
//Objective: Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
function multiplesOf3Or5(number) {
  var total = 0;
  for (let i = (number - 1); i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      total = total + i;
    }
  }
  console.log(total);
  return total;
}

multiplesOf3Or5(10);
