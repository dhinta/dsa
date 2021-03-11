/**
 * To capitalize the first letter of each word
 * Example: Hi there = Hi There
 */


const capitalize = (str) => {
  let arr = str.split(" ");
  let arr2 = arr.map(
    (item) => item[0].toUpperCase() + item.slice(1, item.length)
  );
  return arr2.join(" ");
}
