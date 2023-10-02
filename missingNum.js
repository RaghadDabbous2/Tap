function findMissingNum(nums){
    let totalSum = 0;
    for(let i=0 ;i <= nums.length ;i++){
        totalSum += i;
    }
    let sum =0;
    for(let i=0 ;i<nums.length ;i++){
        sum += nums[i];
    }

    return totalSum - sum;
}

const nums = [0,1];

console.log(findMissingNum(nums));
