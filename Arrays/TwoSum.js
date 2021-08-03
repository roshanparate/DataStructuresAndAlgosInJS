var twoSum = function(nums, target) {
    
    let arr = [];
    let numsLength = nums.length - 0 ; 
    for(let i= 0 ; i < numsLength ; i++){
        for (let j= i+1; j < numsLength ; j++){
          console.log(nums[i], nums[j])
            console.log(target === nums[i]+nums[j])
            if(target === nums[i]+nums[j]){
              console.log(nums[i], nums[j])
              arr[0] = i;
              arr[1] = j;
            }
        }
    }
    return arr 
};

twoSum([3,2,4], 6);