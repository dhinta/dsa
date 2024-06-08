function merge (arr1 = [], arr2 = []) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
       if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        if(arr2[j] < arr1[i]) {
            result.push(arr2[j]);
            j++;
        }
        if(arr2[j] === arr1[i]) {
            result.push(arr1[i]);
            result.push(arr2[j]);
            i++;
            j++;
        }
    } 

    if(i < arr1.length) {
        result.push(...arr1.slice(i));
    }
    if(j < arr2.length) {
        result.push(...arr2.slice(j));
    }

    return result;
}

function mergeSort (arr) {
    if(arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}


const randomData = Array.from({length: 5000}, () => Math.floor(Math.random() * 5000));

console.log(mergeSort(randomData));