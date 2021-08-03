function recurringNumber(array){

  for(let i = 0;i<array.length;i++){
    for(let j = i+1;i<array.length;j++){
      if(array[i] === array[j]){
        return array[i];
      }
    }
  }
  return undefined;
}// time O(n^2) | space O(1)

function recurringNumber1(array){
  let map = {};

  for(let i = 0;i<array.length;i++){
    if(map[array[i]] !== undefined){
      return array[i];
    }else{
      map[array[i]] = i;
    }
  }
  return undefined;
}//O(n)

recurringNumber([2,5,1,2,3,5,1,2,4]);
recurringNumber1([2,5,1,2,3,5,1,2,4]);