function rotateArrayByK(arr1, k){

  let arraylen = arr1.length;

  if(arraylen === 0){
    return arr2;
  }
  for (let j = 0; j < k; j++){

    let lastItem = arr1[length-1];
    for(let i = arraylen-1; i > 0; i--){
      arr1[i] = arr1[i-1];
    }
    arr1[0]=lastItem;
  }

  return arr1;
}

rotateArrayByK([1,5,7,8,4,5,10], 2)