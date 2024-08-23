var arr = new Array(number+1).fill(true)
arr[0] = false
arr[1] = false
for(let j=0; j<=Math.sqrt(number); j++){
  if(arr[j] == true){
    primeNumberSieve(number, j, arr)
  }
}


function primeNumberSieve(n,i,arr){
  for(var x=2; i*x<=n; x++){
    console.log(i*x)
    arr[i*x] = false
  }

}
