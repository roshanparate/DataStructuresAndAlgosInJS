var moveZeroes = function(nums) {
    
    let alen = nums.length;
    let newArray = [];
    let count = 0;
    
    if(alen === 0){
        return nums;
    }
    
    for(let i = 0; i< alen ; i++ ){
        
        if(nums[i]!==0){
            newArray.push(nums[i]);
        }
        else{
            count = count + 1;
        }
    }
    
    if(count === 0){
        return newArray;
    }
    
    while(count){
        newArray.push(0);
        count--;
    }
    
    return newArray;
};


moveZeroes([0,1,0,3,12])