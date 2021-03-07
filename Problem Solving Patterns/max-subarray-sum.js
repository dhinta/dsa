// To see this in action
// run command "node max-subarray-sum.js"

/**
 * To get the max sum of a subarray of given length (2nd param) 
 * Example: [2, 9, 4, 6, 2, 11, 8, 1, 4] should return 27 which is sum of [6, 2, 11, 8]
 */

 const maxSubArraySum = (arr, subArryLength) => {
    let tempMax = maxSum = 0;

    for (let i = 0; i < subArryLength; i++) {
        tempMax += arr[i];
    }

    for (let i = subArryLength; i < arr.length; i++) {
        tempMax = tempMax - arr[i-subArryLength] + arr[i];
        maxSum = Math.max(maxSum, tempMax);
    }

    return maxSum;
 };

 console.log(maxSubArraySum([2, 9, 4, 6, 2, 11, 8, 1, 4], 4))