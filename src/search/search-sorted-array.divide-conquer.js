// Search sorted array
// Divide and Conquer

function search (arr, val) {
    if(arr.length === 0) return -1;

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(arr.length / 2);

    while (start < end) {

        if(val > arr[mid]) {
            start = mid;
            mid = Math.ceil((start + end) / 2);
        }
        
        if(val < arr[mid]) {
            end = mid;
            mid = Math.floor((end - start) / 2);
        }
        
        if(val === arr[mid]) {
            return mid;
        }
    }

    return -1;
}

console.log(search([1,2,3,4,5,6,7,8], 5));
console.log(search([1,2,3,4,5,6,7,8], 1));
console.log(search([1,2,3,4,5,6,7,8], 8));
console.log(search([1,2,3,4,5,6,7,8], 11));