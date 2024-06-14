// Search sorted array
// Divide and Conquer

function search (arr, val) {
    if(arr.length === 0) return -1;

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
 
        // Find the mid index
        let mid = Math.floor((start + end) / 2);
 
        // If element is present at 
        // mid, return True
        if (arr[mid] === val) return mid;
 
        // Else look in left or 
        // right half accordingly
        else if (arr[mid] < val)
            start = mid + 1;
        else
            end = mid - 1;
    }
 

    return -1;
}

console.log(search([1,2,3,4,5,6,7,8], 5));
console.log(search([1,2,3,4,5,6,7,8], 1));
console.log(search([1,2,3,4,5,6,7,8], 8));
console.log(search([5,7,7,8,8,10], 6));
console.log(search([1], 1));