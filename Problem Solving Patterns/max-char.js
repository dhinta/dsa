// To see this in action
// run command "node max-char.js"

/**
 * Max occurance of char in a given string
 * debasish -> s
 */

function maxChar(str) {
  let obj = {},
    max = 0,
    maxChar;

  str.toLowerCase().split("").forEach((char) => obj[char] = ++obj[char] || 1);
  for (let ke in obj) {
    if (obj[ke] > max) {
      max = obj[ke];
      maxChar = ke;
    }
  }

  return maxChar;
}

console.log(maxChar("debasish")); //s