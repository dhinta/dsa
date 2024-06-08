function bubble(arr) {

    for (let i = 0; i < arr.length; i++) {
        let hasSwaped = false;
        for (let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j+1]) {
                hasSwaped = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }

        if(!hasSwaped) {
            break;
        }
    }

    return arr;
}

const randomData = Array.from({length: 5000}, () => Math.floor(Math.random() * 5000));

console.log(bubble(randomData));