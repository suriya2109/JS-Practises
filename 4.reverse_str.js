function reverseFunc(str) {
    // reversed = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i];
    // }
    // return reversed;
    // let reverseString = str.split('').reverse().join('');
    // return reverseString;

    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        [str[i], str[j]] = [str[j], str[i]];
        i++;
        j--;
    }
    return str;
}

let s = ["h", "e", "l", "l", "o"];
console.log(reverseFunc(s));
// const str1 = "GeeksForGeeks";
// const substrResult = str1.substr(2, 7); //It's take length.
// const substringResult = str1.substring(2, 7); // It's start to end string.

// console.log("Str.substr(7) =", substrResult);
// console.log("Str.substring(7) =", substringResult);