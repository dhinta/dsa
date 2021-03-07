// To see this in action
// run command "node palindrome.js"

/**
 * is palindrome 
 * TENET -> true
 * TENMET --> false 
 */

const palindrome = (str) => {
    let i = 0, j = str.length - 1, flag = true;
    while(i < j) {
        if(str[i] !== str[j]) {
            flag = false;
        }
        i++;
        j--;
    }    
    return flag;
}

console.log(palindrome("tenet"));