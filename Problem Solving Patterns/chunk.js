// To see this in action
// run command "node chunk.js"

/**
 * Given an array & chunk size, divide the array in many subarrays
 * where each subarray length is of chunk size
 * chunk([1, 2, 3, 4], 2)  --> [[1, 2], [3, 4]]
 * chunk([1, 2, 3, 4, 5], 2)  --> [[1, 2], [3, 4], [5]]
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)  --> [[1, 2, 3], [4, 5, 6], [7, 8]]
 * chunk([1, 2, 3, 4, 5], 4)  --> [[1, 2, 3, 4], [5]]
 * chunk([1, 2, 3, 4, 5], 10)  --> [[1, 2, 3, 4, 5]]
 */

Array.prototype.peek = function () {
    return this.length ? this[this.length - 1] : undefined;
}

const chunkFn1 = (arr, size) => {
  let result = [],
    sub;

  for (let item of arr) {    
    if (!result.length || result.peek().length === size) {
      result.push([item]);
    } else {
      sub = result.peek();
      sub.push(item);
    }
  }

  return result;
};

const chunkFn2 = (arr, size) => {
    
    let result = [], sub;

    for (let count = 0; count < arr.length; count+= size) {
        result.push(arr.slice(count, count + size));
    }    

    return result;
}