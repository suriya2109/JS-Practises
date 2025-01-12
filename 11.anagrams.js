function findAnagrams(str1, str2) {
    // // to remove space and convert to lowercase

    // str1 = str1.replace(/\s+/g, '').toLowerCase();
    // str2 = str2.replace(/\s+/g, '').toLowerCase();

    // // check if the length are different.
    // if (str1.length !== str2.length) {
    //     return false;
    // }

    // // create character map freqency

    // freqencyMap1 = {};
    // freqencyMap2 = {};

    // for (const char of str1) {
    //     freqencyMap1[char] = (freqencyMap1[char] || 0) + 1;
    // }

    // for (const char of str2) {
    //     freqencyMap2[char] = (freqencyMap2[char] || 0) + 1;
    // }

    // for (const char in freqencyMap1) {
    //     if (freqencyMap1[char] !== freqencyMap2[char]) {
    //         return false;
    //     }
    // }
    // return true;


    // function method in js 
    let strOne = str1.replace(/\s+/g, '').toLowerCase();
    let strTwo = str2.replace(/\s+/g, '').toLowerCase();
    let one = strOne.split('').sort().join('');
    let two = strTwo.split('').sort().join('');
    if (one !== two) {
        return false;
    } else {
        return true;
    }
}

console.log(findAnagrams('lisTen', 'Slient'));