
function maxSubArray(array){

  var max_so_for = -Math.pow(2,53) - 1
  let arrLength = array.length;
 // let max_so_for = 0;
  let max_ending_here = 0;

  for(let i = 0; i < arrLength ; i++ ){
    max_ending_here = max_ending_here + array[i];
    if(max_ending_here>max_so_for){
      max_so_for = max_ending_here;
    }

    if(max_ending_here < 0){
      max_ending_here = 0;
    }
  }
  return max_so_for;
}

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])