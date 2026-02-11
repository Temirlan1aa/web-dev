function getMaxSubSum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1 ; i < nums.lenght ; i++) {
        currentSum = Math.max(nums[i] , currentSum + nums[i]);
        maxSum = Math.max(maxSum , currentSum);
    }
    return maxSum
}


console.log(getMaxSubSum([-1, 2, 3, -9]) == 5,
getMaxSubSum([2, -1, 2, 3, -9]) == 6,
getMaxSubSum([-1, 2, 3, -9, 11]) == 11,
getMaxSubSum([-2, -1, 1, 2]) == 3,
getMaxSubSum([100, -9, 2, -3, 5]) == 100,
getMaxSubSum([1, 2, 3]) == 6);
