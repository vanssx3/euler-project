//Problem 2: Even Fibonacci Numbers
//Objective: By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
function fiboEvenSum(n) {
  var total = 0;
  var num1 = 1;
  var num2 = 1;
  var tempnum = 0;
  while(num1 < n){
    tempnum = num1;
    num1 = num1 + num2;
    num2 = tempnum;

    if(num1 % 2 == 0){
      total = total + num1;
    }
  }

  return total;
}
