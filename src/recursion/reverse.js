function reverse(str, newStr = '') {
    if(newStr.length === str.length) return newStr;
    
    newStr += str[str.length - newStr.length - 1];

    return reverse(str, newStr)
}

console.log(reverse ('tenet'))
console.log(reverse ('Debasish'))
