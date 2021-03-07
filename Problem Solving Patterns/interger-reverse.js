// To see this in action
// run command "node integer-reverse.js"

/**
 * reverse interger
 * 1234 -> 4321
 */

const reverseInt = (num) => {
    var reversed = 0;
    while(num) {
        reversed = reversed * 10 + num % 10;
        num = parseInt(num / 10);
    }
    return reversed;
};

console.log(reverseInt(1234));
