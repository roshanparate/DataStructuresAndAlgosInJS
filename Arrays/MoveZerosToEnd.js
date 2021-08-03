function moveZeroes(arr) {
    
    let count = 0;
    let arrLength = arr.length;
    
    if(arr.length === 0){
        return arr;
    }
    
    for (let i = 0; i < arrLength; i++)
        if (arr[i] != 0){
            arr[count++] = arr[i];
        }

    while (count < arrLength){
        arr[count++] = 0;
    }

  return arr;

};


moveZeroes([0,1,0,3,12])