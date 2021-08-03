function moveZeroes(arr) {
    
    let numsLength = arr.length;

    for(let i= 0 ; i < numsLength ; i++){
        for (let j= i+1; j < numsLength ; j++){
        
            if(ums[i]===nums[j]){
              return true;
            }
        }
    }

    return false;
};


moveZeroes([0,1,0,3,12])