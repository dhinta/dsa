// To see this in action
// run command "node sorted-array-unique-entry.js"

/**
 * To get only unique numbers from a "sorted array" of integers(+ve/-ve)
 * Example: [-2, -1, -1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 6, 6] should return [-2, -1, 1, 2, 3, 4, 6]
 * Example: [-9, -8, -2, 1, 1, 3, 3, 6, 6] should return [-9, -8, -2, 1, 3, 6]
 */
 
 const filterUniqe = (arr) => {
    let i = 0, j = i + 1;

    while (j <= arr.length) {
       if(arr[i] < arr[j]) {
          i++;
          arr[i] = arr[j];
       } else {
          j++;
       }
    }

    return arr.splice(0, ++i);
 };

 console.log(filterUniqe([-2, -1, -1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 6, 6]));
 console.log(filterUniqe([-9, -8, -2, 1, 1, 3, 3, 6, 6]));