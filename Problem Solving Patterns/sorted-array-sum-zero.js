// To see this in action
// run command "node sorted-array-sum-zero.js"

/**
 * To find the first pair of numbers from a "sorted array" of integers(+ve/-ve)
 * where the sum is zero. If no such pair found, return empty array
 * Example: [-15, -9, -7, -4, 1, 3, 4, 6, 18, 99, 135] should return [-4, 4]
 * Example: [-9, -8, -2, 1, 3, 6] should return []
 */

const sum = (p1, p2) => {
  return p1 + p2;
};

const getPairs = (param) => {  
  let left = 0;
  let right = param.length - 1;
  let pair = [];

  while (left < right) {
    if (sum(param[left], param[right]) > 0) {
      --right;
    } else if (sum(param[left], param[right]) < 0) {
      left++;
    } else {
      pair = [param[left], param[right]];
      return pair;
    }
  }
}

console.log(getPairs([-9, -8, -2, 1, 3, 6]));
console.log(getPairs([-15, -9, -7, -4, 1, 3, 4, 6, 18, 99, 135]));

