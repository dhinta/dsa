
function reverseExceptSpecialChars(str) {

    const re = /^[a-z0-9]$/i;

    const arr = new Array(str.length).fill(undefined);
    const specialCharIndexMap = {}
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if(!re.test(str[i])) {
            specialCharIndexMap[i] = str[i];
        } else {
            newStr += str[i];
        }
    }

    let reveresedStr = '';
    for (let i = 0; i < newStr.length; i++) {
        reveresedStr += newStr[newStr.length - i - 1];
    }

    let i = 0;
    let index = 0;
    let result= ''
    while (i < str.length) {
        if(!re.test(str[i])) {
            result += specialCharIndexMap[i];
        } else {
            result += reveresedStr[index];
            index++;
        }
        
        i++;
    }

    return result; 

}


console.log(reverseExceptSpecialChars ('De@bas-ish!!')) // hs@isa-beD!!