// Multiple Pointers
// Find Unique Values in a Sorted Array
function uniqueValueMultiplePointers(arr) {
    if(!arr.length) return 0;

    let i = 0;
    let j = 1;
    let uniqueVal  = 1;

    while (j < arr.length) {
        if(arr[i] !== arr[j]) {
            uniqueVal++;
             i = j;
             j++;
        } else {
            j++;
        }
    }

    return uniqueVal;
}

console.log(uniqueValueMultiplePointers([]));
console.log(uniqueValueMultiplePointers([1]));
console.log(uniqueValueMultiplePointers([1, 1, 1, 2, 3, 4, 4, 5, 5, 6]));
console.log(uniqueValueMultiplePointers([-20, -5, 0, 5, 5, 5, 5, 10, 20, 31]));