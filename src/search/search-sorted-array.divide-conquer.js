// Search sorted array
// Divide and Conquer

function search (arr, val) {
    if(arr.length === 0) return -1;

    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(arr.length / 2);

    let iteration = 0;

    while (left < right) {

        iteration++;
        if(val > arr[mid]) {
            left = mid;
            mid = Math.floor((left + right) / 2);
        }
        
        if(val < arr[mid]) {
            right = mid;
            mid = Math.floor((right - left) / 2);
        }
        
        if(val === arr[mid]) {
            return mid;
        }
    }

    console.log(iteration);

    return -1;
}

// console.log(search([1,2,3,4,5,6,7,8], 5));
// console.log(search([1,2,3,4,5,6,7,8], 1));
console.log(search([1,2,3,4,5,6,7,8], 8));
// console.log(search([1,2,3,4,5,6,7,8], 11));