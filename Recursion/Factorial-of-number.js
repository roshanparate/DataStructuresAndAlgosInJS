//write two function that finds the factorial of any number. One should use recursive, the other should just use a for loop

//O(n)
function findFactorialRecursive(number){
  if(number === 2){
    return 2;
  }
  return number * findFactorialRecursive(number-1);
}

//O(n)
function findFactorialIterative(number){
  let answer = 1;
  if(number === 2){
    answer = 2;
  }
  for(let i= 2; i <= number; i++){
      answer = answer * i;
  }
  return answer;
}

//findFactorialIterative(5);
findFactorialRecursive(5);