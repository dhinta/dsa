// Immulate Math.pow

function pow (num, power) {
    if(power === 0) return 1;

    return num * pow(num, power - 1);
}

console.log(pow(2, 5))
console.log(pow(5, 3))
console.log(pow(1, 2000))
console.log(pow(0, 2))
console.log(pow(30, 0))