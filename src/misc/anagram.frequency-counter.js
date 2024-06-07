// Frequency Counter

function isValidAnagram(first, second) {
    if(first.length !== second.length) {
        return false;
    }

    const charMap = {};

    for (let i = 0; i < first.length; i++) {
        charMap[first[i]] = charMap[first[i]] + 1 || 1;
    }

    for (let i = 0; i < second.length; i++) {
        if(!charMap[second[i]]) {
            return false;
        } else {
            charMap[second[i]]--;
        }

        if(charMap[second[i]] === 0) {
            delete charMap[second[i]];
        }
    }

    return Object.keys(charMap).length === 0;
}

console.log(isValidAnagram('anagram', 'nagaram'));
console.log(isValidAnagram('dusty', 'study'));
console.log(isValidAnagram('night', 'thing'));
console.log(isValidAnagram('elbow', 'below'));
console.log(isValidAnagram('cheap', 'peach'));


console.log(isValidAnagram('rat', 'car'));
console.log(isValidAnagram('awesome', 'awesom'));