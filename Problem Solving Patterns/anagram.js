// To see this in action
// run command "node anagram.js param1 param2"

/**
 * To check If both input build rearranging same letters
 * Each letter count should be same
 * Example: School master = The classroom
 */

const args = process.argv.slice(2);

let param1, param2;

if (args.length < 2) {
  console.log("Please provide two parameters!!");
  process.exit(1);
}

try {
  param1 = args[0].replace(/[^a-z0-9]/gi, "").toLowerCase() || "";
  param2 = args[1].replace(/[^a-z0-9]/gi, "").toLowerCase() || "";
} catch (e) {
  process.exit(e);
}

const getFrequency = (param1, param2) => {
  let flag = true;
  const frequency1 = {};
  const frequency2 = {};

  if (param1.length !== param2.length) {
    flag = false;
  }

  if (flag) {
    for (let key of param1) {
      frequency1[key] = ++frequency1[key] || 1;
    }

    for (let key of param2) {
      frequency2[key] = ++frequency2[key] || 1;
    }

    for (key in frequency1) {
      if (!(key in frequency2)) {
        flag = false;
        break;
      }

      if (frequency1[key] !== frequency2[key]) {
        flag = false;
        break;
      }
    }
  }

  return flag;
};


let flag = getFrequency(param1, param2);

flag ? console.log("Inputs are valid anagram") : console.log("Not an anagram");
