// To see this in action
// run command "node string-reverse.js"

/**
 * Reverse the given string 
 * debasish -> hsisabed
 */

// Solution 1

const reverse = (str) => {
    let reversed = str.split("").reduce((acc, val) => val + acc);
    return reversed;
}

console.log(reverse("debasish"));