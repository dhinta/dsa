// Sliding window

// Given an array of integers, find the maximum sum of any contiguous subarray of a given number of consequtive elements
// of the array. 

function maxSubArraySum (arr, consequtiveLength = 2) {

    if(arr.length === 0) return 0;
    if(arr.length === 1) return arr[0];

    let sum = 0;

    for (let i = 0; i < consequtiveLength; i++) {
        sum += arr[i]
    }
    let tempSum = sum;
    
    for (let i = 0; i < arr.length; i++) {
        tempSum = tempSum - arr[i] + arr[i + consequtiveLength]

        if(tempSum > sum) {
            sum = tempSum
        }
    }

    return sum;
}

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2))
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4))
console.log(maxSubArraySum([4,2,1,6], 1))
console.log(maxSubArraySum([4,2,1,6,2], 4))